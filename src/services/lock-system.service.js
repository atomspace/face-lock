var system = require('./system.service.js');

var lockDelay = 10000;
var isTimer = false;

module.exports = {
    lockSystem: function lockSystem() {
        if(!isTimer) {
            lockIfAbsent = setTimeout( function() {
                console.log('Locking system...');
                system.lock();
                isTimer = false;
            }, lockDelay)
        }
        isTimer = true;
    },
    cancelLock: function cancelLock() {
        clearTimeout(lockIfAbsent);
        isTimer = false;
    }
};
  