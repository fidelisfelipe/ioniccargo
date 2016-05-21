'use strict';
angular.module('auth', [
  'ionic',
  'ngCordova',
  'ui.router',
  // TODO: load other modules selected during generation
])
.config(function ($stateProvider) {
  // ROUTING with ui.router
  $stateProvider
    // this state is placed in the <ion-nav-view> in the index.html
    .state('auth', {
      url: '/auth',
       templateUrl: 'auth/templates/init.html',
       controller: 'AuthCtrl as auth'
    });
});
