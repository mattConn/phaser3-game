import { player } from './create';

// keyboard control: change player's velcocity, animations
export default function getKeyboardInput(game){
    let cursors = game.input.keyboard.createCursorKeys();

    // left or right key: play walk animation
    if (cursors.left.isDown || cursors.right.isDown)
      player.playAnimation('walk');

    // set positive or negative velocity on player, flip horizontally
    if (cursors.left.isDown) { // move left
      player.sprite.setVelocityX(-280);
      player.sprite.flipX = false;
    } else if (cursors.right.isDown) { // move right
      player.sprite.setVelocityX(280);
      player.sprite.flipX = true;
    } else { // idle
      player.sprite.setVelocityX(0);
      player.playAnimation('idle');
    }
  
    // jump
    if (cursors.up.isDown && player.sprite.body.touching.down) {
      player.sprite.setVelocityY(-250);
    }

    // play animation when jumping or falling
    if (!player.sprite.body.touching.down) 
      player.playAnimation('inTheAir');
}