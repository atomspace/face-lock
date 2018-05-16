var tray = require('../services/tray.service'); 

tray.setIcon('src/camera.png')

tray.setMenu([
    {
        label: 'Start',
        type: 'normal',
        click: function() {
            console.log('Srart')
        }
    }, {
        label: 'End',
        type: 'normal',
        click: function() {
            console.log('End')
        }
    }
])


