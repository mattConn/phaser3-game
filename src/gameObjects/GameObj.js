// generic/base game object
export default class GameObj {
    constructor(game, image) {
        // game group
        this.group = game.add.group();
        // image to use
        this.image = image;

        // dimensions
        this.width = 0;
        this.height = 0;
    }

    // instantiate in game world
    create(x,y) {
        this.group.create(x, y, this.image);
    }
}