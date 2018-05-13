var lockSystem = require('../services/lock-system.service')
var faceDetecting = require('../services/face-detecting.service')


faceDetecting.onAbsent(function() {
  lockSystem.lockSystem(10000);
  console.log('ABSENT');
})

faceDetecting.onPresent(function() {
  lockSystem.cancelLock();
  console.log('PRESENT');
})


   
