'use strict';
angular.module('main')
.service('MainService', function ($log, $timeout, $ionicModal) {

  $log.log('Hello from your Service: Main in module main');

  // some initial data

  this.getDataModal = function () {
  //configure the ionic modal before use
    $ionicModal.fromTemplateUrl('new-data-modal.html', {
      //scope: dataModal,
      animation: 'slide-in-up'
    }).then(function (modal) {
      //dataModal = modal;
      //push modal of service
      return modal;
    });
  }
  this.changeBriefly = function () {
    var initialValue = this.someData.binding;
    this.someData.binding = 'Yeah this was changed';

    var that = this;
    $timeout(function () {
      that.someData.binding = initialValue;
    }, 500);
  };

});
