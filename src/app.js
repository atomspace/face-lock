require('./controllers/tray.controller');

const path = require('path');
const url = require('url');

const { app, BrowserWindow, Tray, nativeImage } = require('electron');

let win;


function createWindow () {
	win = new BrowserWindow({ width: 800, height: 600 }); // to hide add >>> show: false <<<

	win.loadURL(url.format({
		pathname: path.resolve(__dirname, './ui/index.html'),
		protocol: 'file:',
		slashes: true
	}));

	win.webContents.openDevTools();

	win.on('closed', () => {
		win = null;
	});
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') {
		app.quit();
	}
});

app.on('activate', () => {
	if (win === null) {
		createWindow();
	}
});