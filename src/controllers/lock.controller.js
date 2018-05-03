var lockSystem = require('../services/lock-system.service')

var video = document.getElementById('video');
var tracker = new tracking.ObjectTracker('face');
var isFace = false;

tracking.track('#video', tracker, { camera: true });

    tracker.on('track', function(event) {
      if (event.data.length === 0) {
        console.log('ABSENT');
        lockSystem.lockSystem();
      } else {
        event.data.forEach(function(rect) {
          console.log('PRESENT');
          lockSystem.cancelLock();
        });  
    }
      
});
