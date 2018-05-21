const lockSystem = require('lock-system');

module.exports = {
	lock () {
		lockSystem();
	}
};