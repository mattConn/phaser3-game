import { config } from './index';

// static (immovable) groups 
const staticGroups = {
  platforms: null 
};

// dynamic (moving) groups
const dynamicGroups = {
  player: null 
};

// initial render
// ==============
export function create() {
  // scene setup
  // ===========

  // add static groups
  for(const group in staticGroups)
    staticGroups[group] = this.physics.add.staticGroup();

  // player setup
  dynamicGroups.player = this.physics.add.sprite(100, 450, 'dude');
  dynamicGroups.player.setBounce(0.2);
  dynamicGroups.player.setCollideWorldBounds(true);

  // add collision
  this.physics.add.collider(dynamicGroups.player, staticGroups.platforms);

  // initial scene creation
  // ======================

  // create initial platforms
  staticGroups.platforms.create(100, 100, 'platform');
  staticGroups.platforms.create(0, config.height, 'platform');

  // add image: x,y coords, label
  this.add.image(0, 0, 'star').setOrigin(0);
  this.add.image(400, 400, 'diamond').setOrigin(0);
}