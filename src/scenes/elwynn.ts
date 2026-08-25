import elwynnJSON from '../assets/elwynn.json';
import { Player } from '../entities/player';
import { TILES, SIZES, LAYERS, SPRITES } from '../utils/constants';

export class Elwynn extends Phaser.Scene {
    private player?: Player;
    constructor() {
        super("ElwynnScene");
    }

    //. Метод, в котором происходит предзагрузка
    preload() {
        this.load.image(TILES.ELWYNN, 'src/assets/summer_tiles.png');
        this.load.tilemapTiledJSON('map_elwynn', 'src/assets/elwynn.json');
        this.load.spritesheet(SPRITES.PLAYER, 'src/assets/characters/alliance.png', {
            frameWidth: SIZES.PLAYER.WIDTH,
            frameHeight: SIZES.PLAYER.HIGHT
        })
    }

    //. Создание элементов игры
    create() {
        const mapElwynn = this.make.tilemap({ key: "map_elwynn" });
        const tileset = mapElwynn.addTilesetImage(elwynnJSON.tilesets[0].name, TILES.ELWYNN, SIZES.TILE, SIZES.TILE);
        const groundLayer = mapElwynn.createLayer(LAYERS.GROUND, tileset, 0, 0);
        const wallsLayer = mapElwynn.createLayer(LAYERS.WALLS, tileset, 0, 0);

        this.player = new Player(this, 400, 250, SPRITES.PLAYER)
    }

    //. Метод, в котором будут прописаны анимации, события и т.д.
    update(_: number, delta: number): void {
        this.player.update(delta)
    }
}
