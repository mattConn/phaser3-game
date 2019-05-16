import { allObjects } from './create';
import { config, game } from './index';
import getKeyboardInput from './getKeyboardInput';
import rooms from './rooms';

export default function update() {

  // get user input
  getKeyboardInput(this);

  // allObjects.player OOB on right
  if (allObjects.player.sprite.x > config.width) {
    allObjects.player.sprite.x = 0; // teleport player to left edge

    config.roomIndex++; // inc. room index

    roomClear();
    roomDraw(rooms[config.roomIndex]); // draw room at next index
  }

  // allObjects.player OOB on left 
  if (allObjects.player.sprite.x < 0) {
    allObjects.player.sprite.x = config.width; // teleport player to right edge

    config.roomIndex--;

    roomClear();
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
          roomObj = allObjects.enemies;
          break;

        default:
          break;
      }
      if (roomObj != null)
        roomObj.create(col * 32, row * 32);

    } // end col loop
  } // end row loop

  // update enemy animations
  spawnEnemies();
}

// clear room of all objects except for player
function roomClear(){
  for(const obj in allObjects)
  {
    if(obj !== 'player')
      allObjects[obj].group.clear(true, true);
  }
}

// update enemy animation and velocity
function spawnEnemies() {
  allObjects.enemies.group.playAnimation('enemyWalk', true);
  allObjects.enemies.group.setVelocityX(-100);
}

// called when player touches enemy
export function collisionEnemy(player, enemy) {

  // touching top of enemy
  if (player.body.touching.down && enemy.body.touching.up) {
    // player bounces off enemy
    player.setVelocityY(-230);
    deathEnemy(enemy);
  }
  // player dies
  else
    deathPlayer();
}

// reverse patrolling object on collision
export function patrolEnemy(enemy, staticObj) {
  if(enemy.body.touching.left)
    enemy.flipX = true; 
  else if(enemy.body.touching.right)
    enemy.flipX = false; 
  else
    return; // not touching left or right, exit function

  if(enemy.body.touching.left)
    enemy.setVelocityX(100);
  else if(enemy.body.touching.right)
    enemy.setVelocityX(-100);
}

// called when player dies
export function deathPlayer(){
 // flip player upside down, move up
 allObjects.player.sprite.setVelocityY(-200);
 allObjects.player.sprite.body.immovable = true;
 allObjects.player.sprite.flipY = true;

 setTimeout(function () {
   // reset room
   allObjects.player.group.clear(true, true);
   config.playerSpawned = false;

   roomClear();

   // redraw
   roomDraw(rooms[config.roomIndex]);

 }, 200);
}

// called when enemy dies
export function deathEnemy(enemy){
 // flip enemy and let them clip through everything
 enemy.setVelocityX(0);
 enemy.setVelocityY(-100);
 enemy.body.immovable = true;
 enemy.flipY = true;

  // destroy enemy in 1s
  setTimeout(function () {
    enemy.destroy();
  }, 1000);
}