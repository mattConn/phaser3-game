import GameObj from './GameObj';

export default class StaticObj extends GameObj {
    constructor(game, image, width, height) {
        super(game, image, width, height);

        // immovable physics
        this.group = game.physics.add.staticGroup();
    }
}