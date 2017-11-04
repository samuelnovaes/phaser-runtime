# phaser-runtime
Phaser runtime is an application to run Phaser.js games on desktop. Phase runtime works with Electron.

[![NPM](https://nodei.co/npm/phaser-runtime.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/phaser-runtime/)

# How to install
```bash
[sudo] npm install -g phaser-runtime
```

# Usage
```bash
cd path/to/game
phaser
```
# Game structure
The project must be a directory that contains a main script called ```index.js``` with Phaser code and a ```config.js``` file with the electron BrowserWindow configuration.

# Get started

### Game function

The ```Game``` function returns a Phaser game object.

> Game(renderer, state, transparent, antialias, physicsConfig);

```javascript
var game = Game(Phaser.CANVAS, {create: create});
```

### importing modules

You can import modules using the ```require``` function

```javascript
var fs = require("fs");
```

# Game example

### Game directory

```
myGame
└---config.js
└---index.js
```
### myGame/config.js

```javascript
module.exports = {
	width: 800,
	height: 600,
	title: "My Game"
}
```

### myGame/index.js

```javascript
var game = Game(Phaser.CANVAS, { create: create, render: render });

var circle;

function create() {

	circle = new Phaser.Circle(game.world.centerX, 100, 64);

}

function render () {

	game.debug.geom(circle, '#cfffff');
	game.debug.text('Diameter : ' + circle.diameter, 50, 200);
	game.debug.text('Circumference : ' + circle.circumference(), 50, 230);

}
```

### Running the game
To run the game, enter ```phaser``` inside the "myGame" directory.

And you will see it
![Example image](https://lh3.googleusercontent.com/u/0/d/0B4u0L5wy_IY8Q1NDd204NVVHUVE=s1600-k-iv1)

# Keybindings

- F12 to open the dev tools.
- F5 to refresh the browser window
