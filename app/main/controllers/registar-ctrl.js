'use strict';
angular.module('main')
.controller('RegistarCtrl', function ($log, $ionicLoading) {
//labels custom
  this.primeiroNome = {title: 'Primeiro Nome', placeholder: 'Primeiro Nome', val: 'Fidelis'},
  this.ultimoNome = {title: 'Último Nome', placeholder: 'Último Nome', val: 'Guimarães'},
  this.email = {title: 'Email', placeholder: 'Email', val: 'atosfiel@gmail.com'},
  this.senha = {title: 'Senha', placeholder: 'Senha', val: '123456'},
  this.enviar = function () {
    $ionicLoading.show({
      template: 'Registrando...',
      duration: 2000
    });
  };
  $log.log('Hello from your Controller: RegistarCtrl in module main:. This is your controller:', this);
});
