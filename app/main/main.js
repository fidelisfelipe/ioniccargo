'use strict';
angular.module('main', [
  'ionic',
  'ngCordova',
  'ui.router',
  'LocalStorageModule',
  'ngMessages',
  'ui.utils.masks',
  // TODO: load other modules selected during generation
])
.constant('$ionicLoadingConfig', {
  template: 'Default Loading Template...'
})
.config(function ($stateProvider, $urlRouterProvider, localStorageServiceProvider) {
  // ROUTING with ui.router
  $stateProvider
  // this state is placed in the <ion-nav-view> in the index.html
.state('main', {
  url: '/main',
  abstract: true,
  templateUrl: 'main/templates/menu.html',
  controller: 'MenuCtrl as menu'
})
.state('main.novo', {
  url: '/main/novo/usuario',
  views: {
    'pageContent': {
      templateUrl: 'main/templates/formNovoUsuario.html',
      controller: 'UsuarioCtrl as usuario'
	}
  }
})
.state('main.init', {
  url: '/init',
  views: {
    'pageContent': {
      templateUrl: 'main/templates/init.html',
      controller: 'InitCtrl as init'
    }
  }
})
.state('main.ok', {
  url: '/ok',
  views: {
    'pageContent': {
      templateUrl: 'main/templates/ok.html'
    }
  }
});
});
