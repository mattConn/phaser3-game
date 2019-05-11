// generic/base game object
export default class GameObj {
    constructor(game, image, width, height) {
        // game group
        this.group = game.physics.add.group();
        // image to use
        this.image = image;

        // dimensions
        this.width = width;
        this.height = height;
    }

    // instantiate in game world
    create(x,y) {
        this.group.create(x + this.width/2, y + this.height/2, this.image);
    }
}