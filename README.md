# Phaser3-Game
Making a game with Phaser 3!

## Building
`npm start` will compile your game with webpack and serve it locally.

## Development
Here's a breakdown of this project's files in `src` and what they're for. This project is just my approach to prototyping a game, and definitely not THE way to make a game.

Phaser has a pretty good tutorial <a href="http://phaser.io/tutorials/making-your-first-phaser-3-game/part1">here</a>, which I used to get off the ground. 

### Entry Point: index.js
The program entry point. Here a new `Phaser` object is instantiated and exported. A config constant is defined as well. I added in `roomIndex`,`cellDimension`,and `playerSpawned` to `config` for my own convenience. The rest is fairly standard boilerplate for a Phaser game, and changing these values will visibly change any Phaser game. You'll notice `preload`, `create` and `update` are specified here as well. 

## Preload, Create, Update: Standard Game Functions

### preload.js
Assets are imported and loaded by Phaser here. The assets I loaded were images and spritesheets in `src/assets`.

### create.js
Game objects are configured here, and essentially prepared for when the game is actually interactive/being played. I made the decision to store all game objects in an object `allObjects`; its easier to import/export every game object I need and easier to affect the entire game when all game objects are in one place. They'll be dealt with a lot.

I call a lot of methods in this file which I'll explain later on.
