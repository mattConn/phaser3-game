import { config } from './index';
import StaticObj from './gameObjects/StaticObj';
import DynamicObj from './gameObjects/DynamicObj';


let player;
export { player };


// scene setup 
export default function create() {
  let platforms = new StaticObj(this, 'platform');
  platforms.create(0, 400);

  // player setup
  let player = new DynamicObj(this, 'dude', 100, 300, platforms);
  // player = this.physics.add.sprite(100, 450, 'dude');
  // player.setBounce(0.2);
  // player.setCollideWorldBounds(true);
}