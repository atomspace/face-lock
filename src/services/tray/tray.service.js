var { app, Tray, Menu, BrowserWindow, nativeImage } = require('electron')
var path = require('path')
var tray;

var whenAppReady = new Promise(function(resolve) {
    app.on('ready', resolve)
})

const STANDART_ICON_PATH = path.resolve(__dirname, 'standart-icon.png');

whenAppReady.then(function() {
    var trayIcon = nativeImage.createFromPath(STANDART_ICON_PATH);
    trayIcon = trayIcon.resize({ width: 16, height: 16 });
    tray = new Tray(trayIcon);
})

function setIcon(iconPath) {
    if(!path.isAbsolute(iconPath)) {
        throw new Error(iconPath + ' is not absolute.')
    }

    whenAppReady.then(function() {
        trayIcon = nativeImage.createFromPath(STANDART_ICON_PATH);
        trayIcon = trayIcon.resize({ width: 16, height: 16 }); 
        tray.setImage(iconPath);
    })
}


function setMenu(menuTemplate) {
    whenAppReady.then(function() {
        var contextMenu = Menu.buildFromTemplate(menuTemplate)
        tray.setContextMenu(contextMenu);
    })   
}

function setTitle(tip) {
    whenAppReady.then(function() {
        tray.setToolTip(tip);
    })
}

module.exports = {
    setIcon,
    setMenu,
    setTitle
};