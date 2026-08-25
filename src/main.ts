import Phaser from 'phaser';
import './style.css';
import { newScene } from './scenes';

new Phaser.Game({
  width: 960,
  height: 600,
  title: 'Phaser RPG',
  scene: newScene,
  url: import.meta.env.URL || '',
  version: import.meta.env.VERSION || '0.0.1',
  backgroundColor: '#000',
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
  pixelArt: true
})