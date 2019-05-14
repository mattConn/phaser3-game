import { allObjects, enemies } from './create';
import { config, game } from './index';
import getKeyboardInput from './getKeyboardInput';
import rooms from './rooms';

export default function update() {

  // get user input
  getKeyboardInput(this);

  // allObjects.player OOB on right
  if (allObjects.player.sprite.x > config.width) {
    allObjects.player.sprite.x = 0; // teleport allObjects.player to left edge

    config.roomIndex++; // inc. room index
    allObjects.platforms.group.clear(true, true); // clear all allObjects.platforms from screen
    enemies.group.clear(true, true);
    allObjects.blocks.group.clear(true, true);
    allObjects.spikes.group.clear(true, true);
    roomDraw(rooms[config.roomIndex]); // draw room at next index
  }

  // allObjects.player OOB on left 
  if (allObjects.player.sprite.x < 0) {
    allObjects.player.sprite.x = config.width; // teleport allObjects.player to right edge

    config.roomIndex--;
    allObjects.platforms.group.clear(true, true);
    enemies.group.clear(true, true);
    allObjects.blocks.group.clear(true, true);
    allObjects.spikes.group.clear(true, true);
    roomDraw(rooms[config.roomIndex]); // draw room at next index
  }
}

// draw room using layout array
export function roomDraw(layout) {
  for (const row in layout) {
    for (const col in layout[row]) {

      // future object to draw in found in row
      let roomObj = null;
      switch (layout[row][col]) {
        case '@': // platform token
          if (config.playerSpawned !== true) {
            roomObj = allObjects.player;
            config.playerSpawned = true;
          }
          break;

        case 'b': // block token
          roomObj = allObjects.blocks;
          break;

        case 'p': // platform token
          roomObj = allObjects.platforms;
          break;

        case '^': // spike token
          roomObj = allObjects.spikes;
          break;

        case 'e': // enemies token
          roomObj = enemies;
          break;

        default:
          break;
      }
      if (roomObj != null)
        roomObj.create(col * 32, row * 32);

    } // end col loop
  } // end row loop

  // update enemy animations
  updateEnemies();
}

// update enemy animation and velocity
function updateEnemies() {
  enemies.group.playAnimation('enemyWalk', true);
  enemies.group.setVelocityX(-100);
}

export function enemyCollision(player, enemy) {
  // touching top of enemy
  if (player.body.touching.down && enemy.body.touching.up) {
    // flip enemy and let them clip through everything
    enemy.setVelocityX(0);
    enemy.setVelocityY(-100);
    enemy.body.immovable = true;
    enemy.flipY = true;

    // allObjects.player bounces
    player.setVelocityY(-230);

    // destroy enemy in 1s
    setTimeout(function () {
      enemy.destroy();
    }, 1000);
  }
  // allObjects.player dies
  else {
    // flip allObjects.player upside down, move up
    player.setVelocityY(-200);
    player.body.immovable = true;
    player.flipY = true;

    setTimeout(function () {
      // clear all groups from screen
      allObjects.player.group.clear(true, true);
      config.playerSpawned = false;
      allObjects.platforms.group.clear(true, true);
      enemies.group.clear(true, true);
      allObjects.blocks.group.clear(true, true);
      allObjects.spikes.group.clear(true, true);

      // reset screen
      roomDraw(rooms[config.roomIndex]);
    }, 200);
  }
}