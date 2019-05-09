import { config } from './index';

let platformObj, player;
// initial render
// ==============
export function create() {
  platformObj = this.physics.add.staticGroup();
  platformObj.create(100, 100, 'platform');
  platformObj.create(0, config.height, 'platform');

  player = this.physics.add.sprite(100, 450, 'dude');

  this.physics.add.collider(player, platformObj);

  player.setBounce(0.2);
  player.setCollideWorldBounds(true);

  // add image: x,y coords, label
  this.add.image(0, 0, 'star').setOrigin(0);
  this.add.image(400, 400, 'diamond').setOrigin(0);
}