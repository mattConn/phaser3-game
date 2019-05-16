import { config } from './index';
import StaticObj from './gameObjects/StaticObj';
import DynamicObj from './gameObjects/DynamicObj';
import rooms from './rooms';
import { roomDraw, collisionEnemy, deathPlayer, patrolEnemy } from './update';


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
  allObjects.player = new DynamicObj(this, 'dude', 32, 48, allObjects.platforms, allObjects.blocks);
  allObjects.player.addAnimation(this, 'walk', 0, 3, 10);
  allObjects.player.addAnimation(this, 'idle', 0, 0);
  allObjects.player.addAnimation(this, 'inTheAir', 1, 1);

  // player body is first entry in children entries

  // add enemy collisions
  allObjects.enemies.addCollision(this, allObjects.platforms, allObjects.spikes);
  allObjects.enemies.addCollisionCallback(this, allObjects.blocks, patrolEnemy);

  // add player collisions functions
  allObjects.player.addCollision(this, allObjects.platforms, allObjects.blocks);
  allObjects.player.addCollisionCallback(this, allObjects.enemies, collisionEnemy);
  allObjects.player.addCollisionCallback(this, allObjects.spikes, deathPlayer);

  // draw first room
  roomDraw(rooms[config.roomIndex]);
}