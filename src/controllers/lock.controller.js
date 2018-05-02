var lockSystem = require('../services/lock-system.service')

var video = document.getElementById('video');
var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
var tracker = new tracking.ObjectTracker('face');
tracker.setInitialScale(1);
tracker.setStepSize(1);
tracker.setEdgesDensity(1);

var isFace = false;

tracking.track('#video', tracker, { camera: true });

    tracker.on('track', function(event) {
      if (event.data.length === 0) {
        if(isFace){
          isFace = false;
          console.log('ABSENT');
          lockSystem.lockSystem(isFace);
        }
      } else {
        event.data.forEach(function(rect) {
          if(!isFace){
            isFace = true;
            console.log('PRESENT');
            lockSystem.cancelLock();
          }
          
        });  
    }
      
});
