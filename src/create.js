import { config } from './index';
import StaticObj from './gameObjects/StaticObj';
import DynamicObj from './gameObjects/DynamicObj';
import rooms from './rooms';
import { drawRoom, enemyCollision } from './update';

let player, platforms, blocks, spikes, enemies;
export { player, platforms, blocks, spikes, enemies };

// scene setup 
export default function create() {
  // platforms setup
  platforms = new StaticObj(this, 'platform', 320, 32);

  // blocks setup
  blocks = new StaticObj(this, 'block', 32, 32);

  // spikes setup
  spikes = new StaticObj(this, 'spikes', 32, 32);

  // enemies setup
  enemies = new DynamicObj(this, 'baddie', 32, 32);
  enemies.addAnimation(this, 'enemyWalk', 0, 1, 5);

  // DO NOT add colliders between separate sprites
  // player setup
  player = new DynamicObj(this, 'dude', 32, 48, platforms, blocks, spikes);
  player.addAnimation(this, 'walk', 0, 3, 10);
  player.addAnimation(this, 'idle', 0, 0);
  player.addAnimation(this, 'inTheAir', 1, 1);

  // add collisions
  enemies.addCollision(this, platforms, blocks, enemies, spikes);

  // add overlap functions
  player.addOverlap(this, enemyCollision, enemies);

  // draw first room
  drawRoom(rooms[config.roomIndex]);
}