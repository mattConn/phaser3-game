import Phaser from 'phaser';
import square from './assets/square.png';
import star from './assets/star.png';
import diamond from './assets/diamond.png';

// game config
const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  scene: {
      preload: preload,
      create: create,
      update: update
  }
};


let game = new Phaser.Game(config);

// assets
const assets = [
  {label: 'star', filename: star},
  {label: 'diamond', filename: diamond}
];

// load all assets
// ===============
function preload(){
  // load images
  for(const img of assets)
  {
      // load images by label and default or specified filename 
      this.load.image(img.label, img.filename === undefined ? square : img.filename);
  }
}


// initial render
// ==============
function create(){
  // add image: x,y coords, label
  this.add.image(400, 300, 'star');
  this.add.image(400, 400, 'diamond');
}

function update(){}