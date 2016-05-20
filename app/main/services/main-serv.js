'use strict';
angular.module('main')
.service('MainService', function ($log, $timeout, $ionicModal) {

  $log.log('Hello from your Service: Main in module main');
  
  this.changeBriefly = function () {
    var initialValue = this.someData.binding;
    this.someData.binding = 'Yeah this was changed';

    var that = this;
    $timeout(function () {
      that.someData.binding = initialValue;
    }, 500);
  };

});
