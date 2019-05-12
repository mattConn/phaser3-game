import { player, platforms, enemies } from './create';
import { config, game } from './index';
import getKeyboardInput from './getKeyboardInput';
import rooms from './rooms';

export default function update(){

  // get user input
  getKeyboardInput(this);

  updateEnemies();

  // player OOB on right
  if(player.sprite.x > config.width) {
    player.sprite.x = 0; // teleport player to left edge

    config.roomIndex++; // inc. room index
    platforms.group.clear(true, true); // clear all platforms from screen
    enemies.group.clear(true, true);
    drawRoom(rooms[config.roomIndex]); // draw room at next index
  }

  // player OOB on left 
  if(player.sprite.x < 0) {
    player.sprite.x = config.width; // teleport player to right edge

    config.roomIndex--;
    platforms.group.clear(true, true);
    enemies.group.clear(true, true);
    drawRoom(rooms[config.roomIndex]);
  }
}

// draw room using layout array
export function drawRoom(layout){
  for(const row in layout)
  {
    for(const col in layout[row])
    {

      // future object to draw in found in row
      let roomObj = null;
      switch (layout[row][col]) {
        case 'p': // platform token
          roomObj = platforms;
          break;

        case 'e': // enemies token
          roomObj = enemies;
          break;
      
        default:
          break;
      }
        if(roomObj != null)
          roomObj.create(col * 32, row * 32);

    } // end col loop
  } // end row loop

}

function updateEnemies(){
  enemies.group.playAnimation('enemyWalk', true);
  enemies.group.setVelocityX(-10);
}