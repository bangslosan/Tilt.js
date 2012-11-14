/*global Tilt, window, console, document */

var Tilt;

Tilt = function () {
  'use strict';
  var self = this, callbacks = [];
  self.x = 0;
  self.y = 0;
  self.x_percent = 0;
  self.y_percent = 0;

  if (window.DeviceMotionEvent === undefined) {
    self.tilt_supported = false;
  } else {
    window.addEventListener('deviceorientation', function (e) {
      var x = Math.floor(e.beta), y = Math.floor(e.gamma), ci;
      self.x = x;
      self.y = y;
      if (callbacks.length > 0) {
        for (ci = 0; ci < callbacks.length; ci = ci + 1) {
          callbacks[ci](x, y);
        }
      }
    }, true);
  }

  self.addListener = function (f) {
    callbacks.push(f);
  };

  self.removeListener = function (f) {
    callbacks.splice(callbacks.indexOf(f));
  };

  return self;
};