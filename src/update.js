import { player, platforms } from './create';
import { config, game } from './index';
import getKeyboardInput from './getKeyboardInput';
import rooms from './rooms';

export default function update(){

  // get user input
  getKeyboardInput(this);

  // player OOB on right
  if(player.sprite.x > config.width) {
    player.sprite.x = 0; // teleport player to left edge

    config.roomIndex++; // inc. room index
    platforms.group.clear(true, true); // clear all platforms from screen
    drawRoom(rooms[config.roomIndex]); // draw room at next index
  }

  // player OOB on left 
  if(player.sprite.x < 0) {
    player.sprite.x = config.width; // teleport player to right edge

    config.roomIndex--;
    platforms.group.clear(true, true);
    drawRoom(rooms[config.roomIndex]);
  }
}

// draw room using layout array
export function drawRoom(layout){
  for(const row in layout)
  {
    for(const col in layout[row])
    {

      switch (layout[row][col]) {
        case 'p': // platform token
          platforms.create(col * 32, row * 32);
          break;
      
        default:
          break;
      }

    } // end col loop
  } // end row loop

}