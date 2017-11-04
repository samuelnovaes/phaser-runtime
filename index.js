let {app, BrowserWindow} = require('electron')
let path = require('path')
let url = require('url')
let config = require(path.join(process.cwd(), "config.js"))

config.backgroundColor = config.backgroundColor || '#000000'

function createWindow () {
	win = new BrowserWindow(config)
	win.setMenu(null)

	win.loadURL(url.format({
		pathname: path.join(__dirname, 'index.html'),
		protocol: 'file:',
		slashes: true
	}))

	win.on('closed', function () {
		win = null
	})
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') {
		app.quit()
	}
})

app.on('activate', () => {
	if (win === null) {
		createWindow()
	}
})
