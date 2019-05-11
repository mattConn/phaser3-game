import Phaser from 'phaser';
import preload from './preload';
import create from './create';
import update from './update';

export { config };

// game config
 const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 450 },
      debug: true 
    }
  },
  scene: {
    preload: preload,
    create: create,
    update: update
  }
};

let game = new Phaser.Game(config);