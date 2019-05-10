import GameObj from './GameObj';

export default class DynamicObj extends GameObj {
    constructor(game, image, x, y, ...collidesWith) {
        super(game, image);

        // set sprite for animation
        this.sprite = game.physics.add.sprite(x, y, this.image);

        // list of objects to collide with
        this.collidesWith = [...collidesWith].length === 0 ? [] : [...collidesWith];

        // set collisions
        if(this.collidesWith.length > 0)
            this.addCollision(game, ...this.collidesWith);
    }

    // set list of objects to collide with
    addCollision(game, ...objs) {
        for(const obj of this.collidesWith)
            game.physics.add.collider(this.sprite, obj);
    }
}