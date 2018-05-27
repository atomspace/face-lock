require('tracking');
require('tracking/build/data/face');

let video = document.getElementById('video');
let canvas = document.getElementById('canvas');
let tracker = new tracking.ObjectTracker('face');
let context = canvas.getContext('2d');

tracker.setInitialScale(4);
tracker.setStepSize(2);
tracker.setEdgesDensity(0.1);

let present = false;

tracking.track('#video', tracker, { camera: true });

module.exports = {

	onAbsent (callback) {
		tracker.on('track', function (event) {
			if (event.data.length === 0 && present) {
				context.clearRect(0, 0, canvas.width, canvas.height);
				present = false;
				callback();
			}
		});
	},

	onPresent (callback) {
		tracker.on('track', function (event) {
			if (event.data.length > 0 && !present) {
				event.data.forEach(function (rect) {
					context.strokeRect(rect.x, rect.y, rect.width, rect.height);
					context.fillText(`x: ${rect.x}px`, rect.x + rect.width + 5, rect.y + 11);
					context.fillText(`y: ${rect.y}px`, rect.x + rect.width + 5, rect.y + 22);
					present = true;
					callback();
				});
			}
		});
	}

};