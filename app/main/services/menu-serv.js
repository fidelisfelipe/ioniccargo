'use strict';
angular.module('main')
.service('MenuService', function ($log) {

  $log.log('Hello from your Service: Menu in module main');

  this.title = 'Menu';
  this.opcoes = {init: 'Welcome', home: 'Home'};

  this.getData = function () {};

});
