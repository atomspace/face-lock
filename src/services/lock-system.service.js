var system = require('./system.service.js');

var isTimer = true;
var lockTimer;

module.exports = {
    lockSystem: function lockSystem(lockDelay) {
        if(!isTimer) {
            lockTimer = setTimeout( function() {
                console.log('Locking system...');
                system.lock();
                isTimer = false;
            }, lockDelay)
        }
        isTimer = true;
    },
    cancelLock: function cancelLock() {
        clearTimeout(lockTimer);
        isTimer = false;
    }
};
  