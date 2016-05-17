'use strict';
angular.module('main')
.controller('MenuCtrl', function ($log) {
//labels custom
  this.title = 'Menu';
  this.opcoes = {init: 'Welcome', home: 'Home'},
  $log.log('Hello from your Controller: MenuCtrl in module main:. This is your controller:', this);

});
