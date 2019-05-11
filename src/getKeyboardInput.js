import { player } from './create';
import { config } from './index';

export default function getKeyboardInput(game){

    if(player.sprite.x > config.width)
      player.sprite.x = 0;
    if(player.sprite.x < 0)
      player.sprite.x = config.width;

    let cursors = game.input.keyboard.createCursorKeys();

    if (cursors.left.isDown || cursors.right.isDown)
      player.playAnimation('walk');

      // FLIPPING SPRITE HERE
    if (cursors.left.isDown) {
      player.sprite.setVelocityX(-160);
      player.sprite.flipX = false;
    } else if (cursors.right.isDown) {
      player.sprite.setVelocityX(160);
      player.sprite.flipX = true;
    } else {
      player.sprite.setVelocityX(0);
      player.playAnimation('idle');
    }
  
    if (cursors.up.isDown && player.sprite.body.touching.down) {
      player.sprite.setVelocityY(-250);
    }

    if (!player.sprite.body.touching.down) 
      player.playAnimation('inTheAir');
}