var system = require('./system.service.js');

var isFace = false;
var lockDelay = 10000;

function checkAndLock() {
    setTimeout( function() {
        if (isFace === false) {
            console.log('Locking system...')
            system.lock();
        }
    }, lockDelay)
}

function lockSystem() {
    isFace = false;
    checkAndLock();
} 

function cancelLock() {
    isFace = true;
    checkAndLock();
}

module.exports = {
    lockSystem: lockSystem,
    cancelLock: cancelLock
};
  