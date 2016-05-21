'use strict';
angular.module('auth')
.controller('AuthCtrl', function ($log, $state) {

  $log.log('Hello from your Controller: AuthCtrl in module auth:. This is your controller:', this);

  this.header = 'Cargoo';
  
  this.abrirFormNovoUsuario = function (){$state.go('main.novo');};

});
