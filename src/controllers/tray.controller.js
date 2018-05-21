var tray = require('../services/tray/tray.service'); 
var app = require('../services/app.service');
var path = require('path');

tray.setIcon(path.resolve(__dirname, '../camera.png'));

tray.setTitle('Locking system if user is afk');

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
