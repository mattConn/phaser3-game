import GameObj from './GameObj';

export default class StaticObj extends GameObj {
    constructor(game, image) {
        super(game, image);

        // immovable physics
        this.group = game.physics.add.staticGroup();
    }
}