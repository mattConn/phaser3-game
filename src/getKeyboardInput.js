import { allObjects } from './create';

// keyboard control: change allObjects.player's velcocity, animations
export default function getKeyboardInput(game){
    let cursors = game.input.keyboard.createCursorKeys();

    // left or right key: play walk animation
    if (cursors.left.isDown || cursors.right.isDown)
      allObjects.player.playAnimation('walk');

    // set positive or negative velocity on player, flip horizontally
    if (cursors.left.isDown) { // move left
      allObjects.player.sprite.setVelocityX(-280);
      allObjects.player.sprite.flipX = false;
    } else if (cursors.right.isDown) { // move right
      allObjects.player.sprite.setVelocityX(280);
      allObjects.player.sprite.flipX = true;
    } else { // idle
      allObjects.player.sprite.setVelocityX(0);
      allObjects.player.playAnimation('idle');
    }
  
    // jump
    if (cursors.up.isDown && allObjects.player.sprite.body.touching.down) {
      allObjects.player.sprite.setVelocityY(-250);
    }

    // play animation when jumping or falling
    if (!allObjects.player.sprite.body.touching.down) 
      allObjects.player.playAnimation('inTheAir');
}