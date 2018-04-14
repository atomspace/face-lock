var system = require('../services/system.service.js');
var faceDetecting = require('../services/face-detecting.service.js');

var lockDelay = 10000;
function lockSystem() {
    setTimeout( function() {
        if(!faceDetecting.isFace) {
            console.log('Locking system...')
            system.lock();
        }
    }, lockDelay)
} 

module.exports = {
    lockSystem: lockSystem
}    
  