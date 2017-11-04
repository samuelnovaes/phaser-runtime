#!/usr/bin/env node
const cp = require("child_process")
const path = require('path')
const fs = require('fs')
const file = path.join(process.cwd(), "index.js")
const configFile = path.join(process.cwd(), "config.json")

fs.readFile(configFile, 'utf-8', (err, config) => {
	if (err) {
		if (err.code === 'ENOENT') {
			console.error(`Cannot find config.json`)
			return
		}
		console.error(err)
		return
	}

	fs.open(file, 'r', (err, fd) => {
		if (err) {
			if (err.code === 'ENOENT') {
				console.error(`Cannot find index.js`)
				return
			}
			console.error(err)
			return
		}

		process.env.ELECTRON_ENABLE_LOGGING = true

		const proc = cp.spawn(path.join(__dirname, "node_modules", ".bin", /^win/.test(process.platform) ? "electron.cmd" : "electron"), [__dirname, process.cwd(), config])

		proc.stdout.on('data', (data) => {
			console.log(data.toString("utf-8"))
		})

		proc.stderr.on('data', (data) => {
			console.error(data.toString("utf-8"))
		})
	})
})
