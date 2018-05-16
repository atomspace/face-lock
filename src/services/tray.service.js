const { app, Tray, Menu, BrowserWindow, nativeImage } = require('electron')
const path = require('path')

var tray;

var whenAppReady = new Promise(function(resolve) {
    app.on('ready', resolve)
})

function setIcon(iconPath) {
    whenAppReady.then(function(){
        const absoluteIconPath = path.join(iconPath);
        var trayIcon = nativeImage.createFromPath(absoluteIconPath);
    
        trayIcon = trayIcon.resize({ width: 16, height: 16 });
        const tray = new Tray(trayIcon);
    
        tray.setToolTip('Locking system if user is afk');
    })
}

function setMenu(menuTemplate) {
    whenAppReady.then(function(){
        const contextMenu = Menu.buildFromTemplate(menuTemplate)
        tray.setContextMenu(contextMenu);
    })   
}


module.exports = {
    setIcon: setIcon,
    setMenu: setMenu
};