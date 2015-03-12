// Initialize Tessel
var tessel = require('tessel');
var car = require('servo-car').use(tessel.port['A']);

// Initialize Myo
var Myo = require('myo');
var myo = Myo.create();
// Keep the Myo unlocked
myo.on('connected', function () {
  myo.setLockingPolicy('none');
});


// Go
myo.on('fingers_spread', function (edge) {
  if(!edge) return;
  console.log('Forward!');
  car.forward();
});

// Stop
myo.on('fist', function (edge) {
  if(!edge) return;
  console.log('Stop!');
  car.stop();
  myo.vibrate();
});

// Left
myo.on('wave_in', function (edge) {
  if(!edge) return;
  console.log('Turning left...');
  car.left();
});

// Right
myo.on('wave_out', function (edge) {
  if(!edge) return;
  console.log('Turning right...');
  car.right();
});
