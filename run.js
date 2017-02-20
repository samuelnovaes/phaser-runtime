#!/usr/bin/env node
const cp = require("child_process");
const path = require('path');
const fs = require('fs');
if(!process.argv[2]){
	run(process.cwd());
}
else if(path.isAbsolute(process.argv[2])){
	run(process.argv[2]);
}
else{
	run(path.join(process.cwd(), process.argv[2]));
}
function run(dir){
	let file = path.join(dir, "index.js");
	if(!fs.existsSync(file)){
		console.error(`Cannot find module ${file}`);
	}
	else{
		process.env.ELECTRON_ENABLE_LOGGING = true;
		const processo = cp.spawn(path.join(__dirname, "node_modules", ".bin", /^win/.test(process.platform) ? "electron.cmd" : "electron"), [__dirname, dir]);
		processo.stdout.on('data', (data) => {
			console.log(data.toString("utf-8"));
		});
		processo.stderr.on('data', (data) => {
			console.error(data.toString("utf-8"));
		});
	}
}