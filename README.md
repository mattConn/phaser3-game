# Phaser3-Game
Making a game with Phaser 3

## Building
First `npm install` all dependencies. `npm start` will compile your game with webpack and serve it locally.

## Development
Good documentation of this project is still in the works! In a nutshell:
- index.js
    - program entry point

- preload.js
    - loads assets
- create.js
    - sets up the game, applies these assets
- update.js
    - things that happen when the game is actually being played, liked callbacks on collision etc. There are also a lot of functions defined here that were intended to be called while the game is being played, such as functions for drawing and clearing rooms.

- getKeyboardInput.js
    - getting keyboard input to control the player.

- rooms.js
    - where plain-text files from `room_layouts` are loaded and stored to be read on room drawing.

- gameObjects directory
    - A base `gameObj` is defined here and then extended for static objects (immovable platforms, blocks) and dynamic objects (moving enemies and a moving player). These classes wrap Phaser's API.

- room_layouts directory
    - Here are the room layout plain-text files. See update.js for the switch statement that controls which token means what.
