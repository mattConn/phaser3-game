import square from './assets/square.png';
import star from './assets/star.png';
import diamond from './assets/diamond.png';
import platform from './assets/platform.png';
import dude from './assets/dude.png';

// images
const images = [
  { label: 'star', filename: star },
  { label: 'diamond', filename: diamond },
  { label: 'platform', filename: platform }
];

const spritesheets = [
  { label: 'dude', filename: dude }
];

// load all images
export function preload() {

  for (const img of images)
    this.load.image(img.label, img.filename);

  this.load.spritesheet('dude', dude, { frameWidth: 32, frameHeight: 48 });
}