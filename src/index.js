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
  roomIndex: 0, // initial room to draw
  cellDimension: 32, // width/height of single grid cell
  playerSpawned: false, // flag for allObjects.player spawned already
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 600 },
      debug: false 
    }
  },
  scene: {
    preload: preload,
    create: create,
    update: update
  }
};

let game = new Phaser.Game(config);
export { game };