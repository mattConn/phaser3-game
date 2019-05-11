import { config } from './index';
import StaticObj from './gameObjects/StaticObj';
import DynamicObj from './gameObjects/DynamicObj';


let player;
export { player };


// scene setup 
export default function create() {
  // platforms setup
  let platforms = new StaticObj(this, 'platform');
  platforms.width = 400;
  platforms.height = 32;

  platforms.create(platforms.width/2, config.height - platforms.height/2);

  // player setup
  player = new DynamicObj(this, 'dude', 100, 300, platforms);
  player.addAnimation(this,'walk', 0, 3, 10);
  player.addAnimation(this,'idle', 0, 0);
  player.addAnimation(this,'inTheAir', 1, 1);
}