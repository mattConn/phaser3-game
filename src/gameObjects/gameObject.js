// generic/base game object
class gameObj {
    constructor(game, x = null, y = null, image = null) {
        // game group
        this.group = game.add.group();

        // position in world
        this.position = {
            x: x,
            y: y
        }
        // image to use
        this.image = image;
    }

    // set position
    setPosition(x, y) {
        this.position.x = x;
        this.position.y = y;
    }

    // instantiate in game world
    create() {
        this.group.create(this.position.x, this.position.y, this.image);
    }
}

export { gameObj };