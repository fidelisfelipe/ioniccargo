'use strict';
angular.module('main', [
  'ionic',
  'ngCordova',
  'ui.router',
  'LocalStorageModule',
  // TODO: load other modules selected during generation
])
.constant('$ionicLoadingConfig', {
  template: 'Default Loading Template...'
})
.config(function ($stateProvider, $urlRouterProvider, localStorageServiceProvider) {
  localStorageServiceProvider.setPrefix('mainStorage');
  // ROUTING with ui.router
  $urlRouterProvider.otherwise('/main/init');
  $stateProvider
    // this state is placed in the <ion-nav-view> in the index.html
.state('main', {
  url: '/main',
  abstract: true,
  templateUrl: 'main/templates/menu.html',
  controller: 'MenuCtrl as menu'
})
.state('main.init', {
  url: '/init',
  views: {
    'pageContent': {
      templateUrl: 'main/templates/init.html',
      controller: 'InitCtrl as init'
    }
  }
});
});
