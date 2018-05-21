require('tracking');
require('tracking/build/data/face');

var video = document.getElementById('video');
var tracker = new tracking.ObjectTracker('face');

var present = false;

tracking.track('#video', tracker, { camera: true });

module.exports = {

    onAbsent: function(callback) {
        tracker.on('track', function(event) {
            if (event.data.length === 0) {
                callback();
            } 
            return;
        }); 
    },

    onPresent: function(callback) {
        tracker.on('track', function(event) {
            if (event.data.length > 0) {
                event.data.forEach(function(rect) {
                    callback()
                });
            } 
            return;
        });
    }
    
}
    