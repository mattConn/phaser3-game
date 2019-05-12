import GameObj from './GameObj';

export default class DynamicObj extends GameObj {
    constructor(game, image, width, height, ...collidesWith) {
        super(game, image, width, height);

        // list of objects to collide with
        this.collidesWith = [];

        // list of sprite animations
        this.animations = [];

        // sprites
        this.sprite = null;

        // set collisions
        this.addCollision(game, ...collidesWith);
    }

    // add sprite to scene at x y coords
    create(x, y) {
        this.sprite = this.group.create(x + this.width/2, y + this.height/2, this.image);
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
        if (this.animations.find(animation => animation.key === animationName))
            this.sprite.anims.play(animationName, true);
    }
}