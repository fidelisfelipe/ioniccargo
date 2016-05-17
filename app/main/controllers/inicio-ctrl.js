'use strict';
angular.module('main')
.controller('InicioCtrl', function ($log) {
//labels custom
  this.registrarTitle = 'Registrar';
  this.entrarTitle = 'Entrar';

  $log.log('Hello from your Controller: InicioCtrl in module main:. This is your controller:', this);

});
