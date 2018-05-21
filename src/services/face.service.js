require('tracking');
require('tracking/build/data/face');

let video = document.getElementById('video');
let tracker = new tracking.ObjectTracker('face');

let present = false;

tracking.track('#video', tracker, { camera: true });

module.exports = {

	onAbsent (callback) {
		tracker.on('track', function (event) {
			if (event.data.length === 0 && present) {
				present = false;
				callback();
			}
		});
	},

	onPresent (callback) {
		tracker.on('track', function (event) {
			if (event.data.length > 0 && !present) {
				event.data.forEach(function () {
					present = true;
					callback();
				});
			}
		});
	}

};