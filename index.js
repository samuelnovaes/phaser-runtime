const { app, BrowserWindow } = require('electron')
const path = require('path')
const url = require('url')
const config = JSON.parse(process.argv[3])

if (config) config.backgroundColor = config.backgroundColor || '#000000'

function createWindow() {
	win = new BrowserWindow(config)
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
