'use strict';
angular.module('cargo', [
  // load your modules here
  'main', // starting with the main module
]).run(function ($ionicPlatform, $log) {
  $log.log('run app cargo');
  $ionicPlatform.ready(function () {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});
