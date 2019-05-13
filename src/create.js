import { config } from './index';
import StaticObj from './gameObjects/StaticObj';
import DynamicObj from './gameObjects/DynamicObj';
import rooms from './rooms';
import { drawRoom } from './update';

let player, platforms, enemies;
export { player, platforms, enemies };

// scene setup 
export default function create() {
  // platforms setup
  platforms = new StaticObj(this, 'platform', 400, 32);

  // enemies setup
  enemies = new DynamicObj(this, 'baddie', 32, 32);
  enemies.addAnimation(this, 'enemyWalk',0,1,5);


  // player setup
  player = new DynamicObj(this, 'dude', 32, 48, platforms, enemies);
  player.addAnimation(this,'walk', 0, 3, 10);
  player.addAnimation(this,'idle', 0, 0);
  player.addAnimation(this,'inTheAir', 1, 1);

  // add collisions
  enemies.addCollision(this, player, platforms, enemies);

  // add overlap functions
  player.addOverlap(this, enemyCollisionTop, enemies);

  // draw first room
  drawRoom(rooms[config.roomIndex]);
}

function enemyCollisionTop(player, enemy){
  player.body.x = enemy.body.x;
}