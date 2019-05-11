import { player, platforms } from './create';
import { config, game } from './index';
import getKeyboardInput from './getKeyboardInput';
import rooms from './rooms';

export default function update(){

  // get user input
  getKeyboardInput(this);

  if(player.sprite.x > config.width) {
    player.sprite.x = 0;

    config.roomIndex++;
    platforms.group.clear(true, true);
    drawRoom(rooms[config.roomIndex]);
  }

  if(player.sprite.x < 0) {
    player.sprite.x = config.width;

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