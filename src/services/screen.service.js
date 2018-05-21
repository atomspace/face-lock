let system = require('./system.service.js');

let lockTimer;

module.exports = {
	lockWithDelay (lockDelay) {
		this.cancelLock();
		lockTimer = setTimeout(function () {
			console.log('Locking system...');
			system.lock();
		}, lockDelay);
	},
	cancelLock: function cancelLock () {
		clearTimeout(lockTimer);
	}
};