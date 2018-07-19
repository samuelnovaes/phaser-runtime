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

The project must be a directory that contains an `index.js` file with Phaser code and a `package.json` file with the window configuration according to the Electron [BrowserWindow](https://electron.atom.io/docs/api/browser-window/) documentation.

# Get started

### Game function

The `Game` function returns a Phaser game object.

> Game(configObject);

```javascript
var config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  backgroundColor: '#000000',
  parent: 'phaser-example',
  physics: {
    default: 'matter',
    matter: {
      gravity: {
        scale: 0,
      },
      plugins: {
        attractors: true,
      },
    },
  },
  scene: {
    preload: preload,
    create: create,
  },
};

var game = new Phaser.Game(config);
```

### importing modules

You can import modules using the `require` function.

```javascript
var fs = require('fs');
```

### loading local assets

You must have to use `__dirname` to refers to the game directory

```javascript
game.load.image('progress', __dirname + '/img/progress.png');
```

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
var game = new Phaser.Game(config);

function preload() {
  this.load.image('sun', __dirname + '/assets/tests/space/sun.png');
  this.load.image('alien', __dirname + '/assets/sprites/space-baddie.png');
}

function create() {
  //  You can enable the Attractors plugin either via the game config (see above), or explicitly in code:
  // this.matter.system.enableAttractorPlugin();

  this.matter.world.setBounds();

  this.matter.add.imageStack('alien', null, 0, 500, 50, 2, 0, 0, {
    mass: 0.5,
    ignorePointer: true,
  });

  var sun = this.matter.add.image(400, 200, 'sun', null, {
    shape: {
      type: 'circle',
      radius: 64,
    },
    plugin: {
      attractors: [
        function(bodyA, bodyB) {
          return {
            x: (bodyA.position.x - bodyB.position.x) * 0.000001,
            y: (bodyA.position.y - bodyB.position.y) * 0.000001,
          };
        },
      ],
    },
  });

  this.matter.add.mouseSpring();
}
```

### Running the game

To run the game, enter `phaser` inside the "myGame" directory.

And you will see it
![Example image](https://lh3.googleusercontent.com/u/0/d/0B4u0L5wy_IY8Q1NDd204NVVHUVE=s1600-k-iv1)

# Keybindings

- F12 to open the dev tools.
- F5 to refresh the browser window
