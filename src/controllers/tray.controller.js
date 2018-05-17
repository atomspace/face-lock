var tray = require('../services/tray.service'); 
var app = require('../services/app.service');


tray.setIcon('src/camera.png')

tray.setTip('Locking system if user is afk');

tray.setMenu([
    {
        label: 'End',
        type: 'normal',
        click: function() {
            app.quit();
            console.log('End')
        }
    }
])
