import { player, platforms } from './create';
import { config } from './index';
import getKeyboardInput from './getKeyboardInput';
import levels from './levels/index';

export default function update(){

  // get user input
  getKeyboardInput(this);

  if(player.sprite.x > config.width) {
    player.sprite.x = 0;

  }

  if(player.sprite.x < 0) {
    player.sprite.x = config.width;

    drawRoom(levels[0]);
  }
}

// draw room using layout array
function drawRoom(layout){
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