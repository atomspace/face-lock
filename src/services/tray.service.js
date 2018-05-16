var { app, Tray, Menu, BrowserWindow, nativeImage } = require('electron')
var path = require('path')

var tray;

var whenAppReady = new Promise(function(resolve) {
    app.on('ready', resolve)
})

function setIcon(iconPath) {
    whenAppReady.then(function(){
        var absoluteIconPath = path.join(iconPath);
        var trayIcon = nativeImage.createFromPath(absoluteIconPath);
        trayIcon = trayIcon.resize({ width: 16, height: 16 });
        tray = new Tray(trayIcon);
    
        tray.setToolTip('Locking system if user is afk');
    })
}

function setMenu(menuTemplate) {
    whenAppReady.then(function(){
        var contextMenu = Menu.buildFromTemplate(menuTemplate)
        tray.setContextMenu(contextMenu);
    })   
}


module.exports = {
    setIcon: setIcon,
    setMenu: setMenu
};