# phaser-runtime

Phaser runtime is an application to run Phaser 3 games on desktop. Phase Runtime works with Electron.

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

The project must be a directory that contains a `package.json` file with the `window` configuration according to the Electron [BrowserWindow](https://electron.atom.io/docs/api/browser-window) documentation and the main script file with Phaser code.

# Importing modules

You can import modules using the `require` function.

```javascript
require("foo.js")
const fs = require('fs')
```

# loading local assets

You must have to use `__dirname` to refers to the game directory

```javascript
this.load.spritesheet('diamonds', __dirname + '/sprites/diamonds32x24x5.png', { frameWidth: 32, frameHeight: 24 });
```

# Browser object

The ```browser``` object refers to the current Electron BrowserWindow object. It's equivalent to ```require("electron").remote.getCurrentWindow();```

```javascript
browser.setTitle("Foo") //Set the window title
browser.serSize(640, 480) //Resize the window
browser.setResizable(true) //Set the window resizable
browser.setMaximizable(true) //Set the window maximizable
browser.center() //Center the window on scree
```
[See all methods here](http://electron.atom.io/docs/api/browser-window/)

# Game example

### Game directory

```
myGame
└---package.json
└---index.js
```

### myGame/package.json

> You can generate a `package.json` with `npm init` command

```json
{
	"name": "demo",
	"version": "1.0.0",
	"description": "Phaser Runtime Demo",
	"main": "index.js",
	"license": "ISC",
	"window": {
		"width": 800,
		"height": 600,
		"title": "My Game"
	}
}
```

### myGame/index.js

```javascript
const config = {
	type: Phaser.AUTO,
	scene: {
		create: create
	}
}
//It's not necessary to set width, height and parent

const game = new Phaser.Game(config)

function create() {
	var circle = new Phaser.Geom.Circle(400, 300, 100)

	var graphics = this.add.graphics({ fillStyle: { color: 0xff0000 } })
	graphics.fillCircleShape(circle)
}
```

### Running the game

To run the game, enter `phaser` inside the "myGame" directory.
And you will see it
![Example image](https://raw.githubusercontent.com/samuelnovaes/phaser-runtime/master/screenshot.png)
