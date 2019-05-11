import { player } from './create';
import { config } from './index';

export default function update(){

    if(player.group.x > config.width)
      player.group.x = 0;
    if(player.group.x < 0)
      player.group.x = config.width;

    let cursors = this.input.keyboard.createCursorKeys();

    if (cursors.left.isDown || cursors.right.isDown)
      player.playAnimation('walk');

      // FLIPPING SPRITE HERE
    if (cursors.left.isDown) {
      player.group.setVelocityX(-160);
      player.group.flipX = false;
    } else if (cursors.right.isDown) {
      player.group.setVelocityX(160);
      player.group.flipX = true;
    } else {
      player.group.setVelocityX(0);
      player.playAnimation('idle');
    }
  
    if (cursors.up.isDown && player.group.body.touching.down) {
      player.group.setVelocityY(-250);
    }

    if (!player.group.body.touching.down) 
      player.playAnimation('inTheAir');
}