import { config, game } from './index';
import GameObj from './gameObjects/GameObj';
import StaticObj from './gameObjects/StaticObj';
import DynamicObj from './gameObjects/DynamicObj';


let player;
export { player };


// scene setup 
export default function create() {
  let platforms = new StaticObj(this, 'platform');
  platforms.create(0, config.height);

  // player setup
  // let player = new DynamicObj(this, 'dude', 200, 450, platforms);
  // player = this.physics.add.sprite(100, 450, 'dude');
  // player.setBounce(0.2);
  // player.setCollideWorldBounds(true);
}