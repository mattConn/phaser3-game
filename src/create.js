import { config } from './index';
import StaticObj from './gameObjects/StaticObj';
import DynamicObj from './gameObjects/DynamicObj';
import rooms from './rooms';
import { roomDraw, collisionEnemy } from './update';

const allObjects = {
  player: null,
  platforms: null,
  blocks: null,
  spikes: null,
  enemies: null 
};

export { allObjects };

// scene setup 
export default function create() {
  // allObjects.platforms setup
  allObjects.platforms = new StaticObj(this, 'platform', 320, 32);

  // blocks setup
  allObjects.blocks = new StaticObj(this, 'block', 32, 32);

  // spikes setup
  allObjects.spikes = new StaticObj(this, 'spikes', 32, 32);

  // enemies setup
  allObjects.enemies = new DynamicObj(this, 'baddie', 32, 32);
  allObjects.enemies.addAnimation(this, 'enemyWalk', 0, 1, 5);

  // DO NOT add colliders between separate sprites
  // player setup
  allObjects.player = new DynamicObj(this, 'dude', 32, 48, allObjects.platforms, allObjects.blocks, allObjects.spikes);
  allObjects.player.addAnimation(this, 'walk', 0, 3, 10);
  allObjects.player.addAnimation(this, 'idle', 0, 0);
  allObjects.player.addAnimation(this, 'inTheAir', 1, 1);

  // add collisions
  allObjects.enemies.addCollision(this, allObjects.platforms, allObjects.blocks, allObjects.enemies, allObjects.spikes);

  // add overlap functions
  allObjects.player.addOverlap(this, collisionEnemy, allObjects.enemies);

  // draw first room
  roomDraw(rooms[config.roomIndex]);
}