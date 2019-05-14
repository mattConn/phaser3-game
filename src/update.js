import { player, platforms, blocks, enemies } from './create';
import { config, game } from './index';
import getKeyboardInput from './getKeyboardInput';
import rooms from './rooms';

export default function update() {

  // get user input
  getKeyboardInput(this);

  // player OOB on right
  if (player.sprite.x > config.width) {
    player.sprite.x = 0; // teleport player to left edge

    config.roomIndex++; // inc. room index
    platforms.group.clear(true, true); // clear all platforms from screen
    enemies.group.clear(true, true);
    blocks.group.clear(true, true);
    drawRoom(rooms[config.roomIndex]); // draw room at next index
  }

  // player OOB on left 
  if (player.sprite.x < 0) {
    player.sprite.x = config.width; // teleport player to right edge

    config.roomIndex--;
    platforms.group.clear(true, true);
    enemies.group.clear(true, true);
    drawRoom(rooms[config.roomIndex]);
    updateEnemies();
  }
}

// draw room using layout array
export function drawRoom(layout) {
  for (const row in layout) {
    for (const col in layout[row]) {

      // future object to draw in found in row
      let roomObj = null;
      switch (layout[row][col]) {
        case '@': // platform token
          if (config.playerSpawned !== true) {
            roomObj = player;
            config.playerSpawned = true;
          }
          break;

        case 'b': // block token
          roomObj = blocks;
          break;

        case 'p': // platform token
          roomObj = platforms;
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

export function enemyCollision(_player, enemy) {
  // touching top of enemy
  if (_player.body.touching.down && enemy.body.touching.up) {
    // flip enemy and let them clip through everything
    enemy.setVelocityX(0);
    enemy.setVelocityY(-100);
    enemy.body.immovable = true;
    enemy.flipY = true;

    // player bounces
    _player.setVelocityY(-230);

    // destroy enemy in 1s
    setTimeout(function () {
      enemy.destroy();
    }, 1000);
  }
  // player dies
  else {
    // flip player upside down, move up
    _player.setVelocityY(-200);
    _player.body.immovable = true;
    _player.flipY = true;

    setTimeout(function () {
      // clear all groups from screen
      player.group.clear(true, true);
      config.playerSpawned = false;
      platforms.group.clear(true, true);
      enemies.group.clear(true, true);

      // reset screen
      drawRoom(rooms[config.roomIndex]);
      updateEnemies();
    }, 200);
  }
}