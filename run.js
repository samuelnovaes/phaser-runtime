#!/usr/bin/env node
const cp = require("child_process")
const path = require('path')
const fs = require('fs')
const configFile = path.join(process.cwd(), "package.json")

fs.readFile(configFile, 'utf-8', (err, pkg) => {
	if (err) {
		if (err.code === 'ENOENT') {
			console.error(`Cannot find ${configFile}`)
			return
		}
		console.error(err)
		return
	}

	const config = JSON.parse(pkg)
	const file = path.join(process.cwd(), config.main)
	config.window = config.window || {}

	fs.open(file, 'r', (err, fd) => {
		if (err) {
			if (err.code === 'ENOENT') {
				console.error(`Cannot find ${file}`)
				return
			}
			console.error(err)
			return
		}

		process.env.ELECTRON_ENABLE_LOGGING = true

		const proc = cp.spawn(path.join(__dirname, "node_modules", ".bin", /^win/.test(process.platform) ? "electron.cmd" : "electron"), [__dirname, process.cwd(), JSON.stringify(config.window), config.main])

		proc.stdout.on('data', (data) => {
			console.log(data.toString("utf-8"))
		})

		proc.stderr.on('data', (data) => {
			console.error(data.toString("utf-8"))
		})
	})
})
