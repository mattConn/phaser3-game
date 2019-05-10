import GameObj from './GameObj';

export default class DynamicObj extends GameObj {
    constructor(game, image, x, y, ...collidesWith) {
        super(game, image);

        // set sprite for animation
        this.group = game.physics.add.sprite(x, y, this.image);

        // list of objects to collide with
        this.collidesWith = [];

        // set collisions
        this.addCollision(game, ...collidesWith);
    }

    // set list of objects to collide with
    addCollision(game, ...objs) {
        this.collidesWith.push(...objs);

        for(const obj of this.collidesWith)
            game.physics.add.collider(this.group, obj.group);
    }
}