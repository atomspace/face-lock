var tray = require('../services/tray.service'); 
var {app} = require('electron')

tray.setIcon('src/camera.png')

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


// {
//     label: 'Start',
//     type: 'normal',
//     click: function() {
//         console.log('Srart')
//     }
// },