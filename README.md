# phaser-runtime
Phaser runtime is an application to run Phaser.js games on desktop. Phase runtime works with Electron.

# How to install
```bash
[sudo] npm install -g phaser-runtime
```

# Usage
```bash
phaser path/to/game
```
# Game structure
The project must be a directory that contains a main script called index.js with Phaser code.

# Get started

### Game function

The ```Game``` function resizes the window and returns a Phaser game object.

> Game(width, height, renderer, state, transparent, antialias, physicsConfig);

```javascript
var game = Game(800, 600, Phaser.CANVAS, {create: create});
```
### browser object

The ```browser``` object refers to the current Electron BrowserWindow object. It's equivalent to ```require("electron").remote.getCurrentWindow();```

```javascript
browser.setTitle("Foo"); //Set the window title
browser.setSize(640, 480); //Resize the window
browser.setResizable(true); //Set the window resizable
browser.setMaximizable(true); //Set the window maximizable
browser.center(); //Center the window on scree
```
[See all methods here](http://electron.atom.io/docs/api/browser-window/)

### importing modules or scripts

You can import scripts or modules using the ```require``` function

```javascript
require("foo.js");
var fs = require("fs");
```

# Game example

### Game directory

```
myGame
└---index.js
```

### myGame/index.js

```javascript
browser.setTitle("My Game");

var game = Game(800, 600, Phaser.CANVAS, { create: create, render: render });

var circle;
var floor;

function create() {

    circle = new Phaser.Circle(game.world.centerX, 100,64);

}

function render () {

    game.debug.geom(circle,'#cfffff');
    game.debug.text('Diameter : '+circle.diameter,50,200);
    game.debug.text('Circumference : '+circle.circumference(),50,230);

}
```

### Running the game
To run the game, enter ```phaser myGame``` inside the "myGame" parent directory.

And you will see it
![Image of Yaktocat](https://lh3.googleusercontent.com/u/0/d/0B4u0L5wy_IY8Q1NDd204NVVHUVE=s1600-k-iv1)

# Debug
Press F12 to open the dev tools.
