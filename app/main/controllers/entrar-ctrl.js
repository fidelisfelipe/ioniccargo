'use strict';
angular.module('main')
.controller('EntrarCtrl', function ($log) {
//labels custom
  this.email = {title: 'Email', placeholder: 'Email', val: 'atosfiel@gmail.com'},
  this.senha = {title: 'Senha', placeholder: 'Senha', val: '123456'},
  $log.log('Hello from your Controller: EntrarCtrl in module main:. This is your controller:', this);

});
