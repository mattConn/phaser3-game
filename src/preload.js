import square from './assets/square.png';
import star from './assets/star.png';
import diamond from './assets/diamond.png';
import platform from './assets/platform.png';
import dude from './assets/dude.png';
import baddie from './assets/baddie.png';

// images
const images = [
  { label: 'star', filename: star },
  { label: 'diamond', filename: diamond },
  { label: 'platform', filename: platform }
];

const spritesheets = [
  { label: 'dude', filename: dude, dimensions: { frameWidth: 32, frameHeight: 48 }},
  { label: 'baddie', filename: baddie, dimensions: { frameWidth: 32, frameHeight: 32 }}
];

// load all images
export default function preload() {

  for (const img of images)
    this.load.image(img.label, img.filename);

  for (const sprite of spritesheets)
    this.load.spritesheet(sprite.label, sprite.filename, sprite.dimensions);
}