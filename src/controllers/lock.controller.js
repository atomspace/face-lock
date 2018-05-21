let screen = require('../services/screen.service');
let face = require('../services/face.service');


face.onAbsent(function () {
	console.log('ABSENT');
	screen.lockWithDelay(10000);
});

face.onPresent(function () {
	console.log('PRESENT');
	screen.cancelLock();
});