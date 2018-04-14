var systemLock = require('./lock-system.service')

var video = document.getElementById('video');
var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
var tracker = new tracking.ObjectTracker('face');
tracker.setInitialScale(4);
tracker.setStepSize(1);
tracker.setEdgesDensity(0.1);

var isFace = false;

tracking.track('#video', tracker, { camera: true });

    tracker.on('track', function(event) {
      context.clearRect(0, 0, canvas.width, canvas.height);
      if (event.data.length === 0) {
        if(isFace){
          isFace = false;
          console.log('ABSENT');
          systemLock.lockSystem();
        }
      } else {
        event.data.forEach(function(rect) {
          context.strokeStyle = '#a64ceb';
          context.strokeRect(rect.x, rect.y, rect.width, rect.height);
          context.font = '11px Helvetica';
          context.fillStyle = "#fff";
          context.fillText('x: ' + rect.x + 'px', rect.x + rect.width + 5, rect.y + 11);
          context.fillText('y: ' + rect.y + 'px', rect.x + rect.width + 5, rect.y + 22);

          if(!isFace){
            isFace = true;
            console.log('PRESENT');
          }
          
        });
        
    }
      
});
module.exports = {
    isFace: isFace
}