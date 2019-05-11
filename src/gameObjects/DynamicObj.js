import GameObj from './GameObj';

export default class DynamicObj extends GameObj {
    constructor(game, image, x, y, ...collidesWith) {
        super(game, image);

        // set sprite for animation
        this.group = game.physics.add.sprite(x, y, this.image);

        // list of objects to collide with
        this.collidesWith = [];

        // list of sprite animations
        this.animations = [];

        // set collisions
        this.addCollision(game, ...collidesWith);

    }

    // set list of objects to collide with
    addCollision(game, ...objs) {
        this.collidesWith.push(...objs);

        for (const obj of this.collidesWith)
            game.physics.add.collider(this.group, obj.group);
    }

    // add animation to sprite
    addAnimation(game, key, start, end, frameRate = 0, repeat = -1) {
        this.animations.push(
            game.anims.create({
                key: key,
                frames: game.anims.generateFrameNumbers(this.image, { start: start, end: end }),
                frameRate: frameRate,
                repeat: repeat
            })
        );
    }

    // play sprite animation
    playAnimation(animationName) {
        if( this.animations.find(animation => animation.key === animationName) )
            this.group.anims.play(animationName, true);
    }
}