'use strict';
angular.module('main')
.controller('InitCtrl', function ($log) {
//labels custom
  this.header = 'Welcome',
  $log.log('Hello from your Controller: InitCtrl in module main:. This is your controller:', this);

});
