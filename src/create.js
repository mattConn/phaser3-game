import { config } from './index';

let platforms, player;

// initial render
// ==============
export function create() {
  // scene setup
  // ===========

  // add static groups
  platforms = this.physics.add.staticGroup();

  // player setup
  player = this.physics.add.sprite(100, 450, 'dude');
  player.setBounce(0.2);
  player.setCollideWorldBounds(true);

  this.physics.add.collider(platforms,player);

  // initial scene creation
  // ======================

  // create initial platforms
  platforms.create(100, 100, 'platform');
  platforms.create(0, config.height, 'platform');

  // add image: x,y coords, label
  this.add.image(0, 0, 'star').setOrigin(0);
  this.add.image(400, 400, 'diamond').setOrigin(0);
}