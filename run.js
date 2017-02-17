#!/usr/bin/env node
const cp = require("child_process");
const path = require('path');
const fs = require('fs');

const caminho = path.join(process.cwd(), process.argv[2], "index.js");

if(!process.argv[2]){
	console.log("Usage: phaser path/to/game");
}
else if(!fs.existsSync(caminho)){
	console.log("Cannot find module "+caminho);
}
else {
	process.env.ELECTRON_ENABLE_LOGGING = true;
	const processo = cp.spawn(path.join(__dirname, "node_modules", ".bin", "electron"), [__dirname, process.argv[2]]);
	processo.stdout.on('data', (data) => {
		console.log(data.toString("utf-8"));
	});

	processo.stderr.on('data', (data) => {
		console.log(data.toString("utf-8"));
	});

	processo.on('close', (code) => {
		console.log(`child process exited with code ${code}`);
	});
}