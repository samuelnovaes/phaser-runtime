#!/usr/bin/env node
const cp = require("child_process")
const path = require('path')
const fs = require('fs')
const file = path.join(process.cwd(), "index.js")

fs.open(file, 'r', (err, fd) => {
	if (err) {
		if (err.code === 'ENOENT') {
			console.error(`Cannot find module ${file}`)
			return
		}
		throw err
	}
	process.env.ELECTRON_ENABLE_LOGGING = true
	const proc = cp.spawn(path.join(__dirname, "node_modules", ".bin", /^win/.test(process.platform) ? "electron.cmd" : "electron"), [__dirname, process.cwd()])
	proc.stdout.on('data', (data) => {
		console.log(data.toString("utf-8"))
	})
	proc.stderr.on('data', (data) => {
		console.error(data.toString("utf-8"))
	})
})
