import { config } from './index';
import { gameObj } from './gameObjects/gameObject';


let platforms, player;
export { player };

// initial render
// ==============
export default function create() {
  // scene setup
  // ===========
  // add static groups
  platforms = this.physics.add.staticGroup();

  // player setup
  player = this.physics.add.sprite(100, 450, 'dude');
  player.setBounce(0.2);
  player.setCollideWorldBounds(true);

  this.physics.add.collider(platforms, player);

  // initial scene creation
  // ======================

  // create initial platforms
  platforms.create(100, 100, 'platform');
  platforms.create(0, config.height, 'platform');

  // add image: x,y coords, label
  let star = new gameObj(this, 100, 100, 'star');
  star.create();
  console.log(star.position.x,star.position.y,star.image);
  // this.add.image(0, 0, 'star').setOrigin(0);
  this.add.image(400, 400, 'diamond').setOrigin(0);
}