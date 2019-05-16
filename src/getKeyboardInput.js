import { allObjects } from './create';

// keyboard control: change allObjects.player's velcocity, animations
export default function getKeyboardInput(game){
    let cursors = game.input.keyboard.createCursorKeys();

    // left or right key: play walk animation
    if (cursors.left.isDown || cursors.right.isDown)
      allObjects.player.playAnimation('walk');

    // set positive or negative velocity on player, flip horizontally
    if (cursors.left.isDown) { // move left
      allObjects.player.group.setVelocityX(-280);
      allObjects.player.lastEntry.flipX = false;
    } else if (cursors.right.isDown) { // move right
      allObjects.player.group.setVelocityX(280);
      allObjects.player.lastEntry.flipX = true;
    } else { // idle
      allObjects.player.group.setVelocityX(0);
      allObjects.player.playAnimation('idle');
    }

    // jump
    if (cursors.up.isDown) {
      if(allObjects.player.lastEntry.body.touching.down)
        allObjects.player.group.setVelocityY(-250);
    }

    // play animation when jumping or falling
    if (!allObjects.player.lastEntry.body.touching.down) 
      allObjects.player.playAnimation('inTheAir');
}