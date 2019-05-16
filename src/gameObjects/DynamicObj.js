import GameObj from './GameObj';

export default class DynamicObj extends GameObj {
    constructor(game, image, width, height) {
        super(game, image, width, height);

        // list of sprite animations
        this.animations = [];

        // sprite
        this.sprite = null;

        // last entry in children.entries
        this.lastEntry = null;
    }

    // add sprite to scene at x y coords
    create(x, y) {
        this.sprite = this.group.create(x + this.width/2, y + this.height/2, this.image);

        // set body to last/most recent group entry
        this.lastEntry = this.group.getChildren()[this.group.getChildren().length - 1];
    }

    // set list of objects to collide with, with optional callback
    addCollision(game, ...objs) {
        for(const obj of [...objs])
            game.physics.add.collider(this.group, obj.group);
    }

    // with onCollision
    addCollisionCallback(game, obj, onCollision = null, preCollision = null) {
        game.physics.add.collider(this.group, obj.group, onCollision, preCollision);
    }

    // set list of objects to collide with, with optional callback
    addOverlap(game, ...objs) {
        for(const obj of [...objs])
            game.physics.add.overlap(this.group, obj.group);
    }

    // with callback
    addOverlapCallback(game, obj, callback = null) {
        game.physics.add.overlap(this.group, obj.group, callback);
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
            this.group.playAnimation(animationName, true);
    }
}