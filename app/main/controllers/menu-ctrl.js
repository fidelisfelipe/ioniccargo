'use strict';
angular.module('main')
.controller('MenuCtrl', function ($log, MainService) {
//labels custom
  this.data = {};
  this.dataModal = MainService.getDataModal();
  $log.log('Hello from your Controller: MenuCtrl in module main:. This is your controller:', this);

});
