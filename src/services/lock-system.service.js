var system = require('./system.service.js');

var isFace = false;
var lockDelay = 10000;
function lockSystem(face) {
    if (face === true) {
        isFace = true;
    } else {
        isFace = false;
    }
    setTimeout( function() {
        if (isFace === false) {
            console.log('Locking system...')
            system.lock();
        }
    }, lockDelay)
} 

module.exports = lockSystem;
  