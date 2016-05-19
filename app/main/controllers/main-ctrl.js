'use strict';
angular.module('main')
.controller('MainCtrl', function ($scope, $log, $ionicModal, MainService, localStorageService) {
//labels custom
  $log.log('MainCtrl in module main:. This is your controller:', this);
  //initialize the datas scope with empty array
  this.datas = [];
  //initialize the data scope with empty object
  this.data = {};
  /**control modal of service **/
  //close modal of service
  this.dataModal = function () {return MainService.getDataModal();};
  //fetches task from local storage
  this.getDatas = function () {
    $log.log('main.getDatas invoked...');
    if (localStorageService.get(this.data)) {
      this.datas = localStorageService.get(this.data);
    } else {
      this.datas = [];
    }
  };
  //creates a new data
  this.createData = function () {
    this.datas.push(this.data);
    localStorageService.set(data, this.datas);
    this.data = {};
	//close new data modal
   MainService.getDataModal($scope).hide();
  };
  //removes a data
  this.removeData = function (index) {

    this.datas.splice(index, 1);
    localStorageService.set(data, datas);
  };
  //update a data as completed
  this.completeData = function (index) {
    if (index !== -1) {
      this.datas[index].completed = true;
    }
    localStorageService.set(data, this.datas);
  };
});
