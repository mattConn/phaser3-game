import { config } from './index';
import StaticObj from './gameObjects/StaticObj';
import DynamicObj from './gameObjects/DynamicObj';


let player, platforms;
export { player };


// scene setup 
export default function create() {
  // platforms setup
  platforms = new StaticObj(this, 'platform', 400, 32);

  platforms.create(0, config.height - platforms.height);
  platforms.create(platforms.width, config.height - platforms.height);

  // player setup
  player = new DynamicObj(this, 'dude', 32, 48, platforms);
  player.addSprite(100,400);
  player.addAnimation(this,'walk', 0, 3, 10);
  player.addAnimation(this,'idle', 0, 0);
  player.addAnimation(this,'inTheAir', 1, 1);
}