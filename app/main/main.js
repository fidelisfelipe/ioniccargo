'use strict';
angular.module('main', [
  'ionic',
  'ngCordova',
  'ui.router',
  // TODO: load other modules selected during generation
])
.constant('$ionicLoadingConfig', {
  template: 'Default Loading Template...'
})
.config(function ($stateProvider, $urlRouterProvider) {

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
})
.state('main.inicio', {
  url: '/inicio',
  views: {
    'pageContent': {
      templateUrl: 'main/templates/inicio.html',
      controller: 'InicioCtrl as inicio'
    }
  }
})
.state('main.registar', {
  url: '/registar',
  views: {
    'pageContent': {
      templateUrl: 'main/templates/registar.html',
      controller: 'RegistarCtrl as registar'
    }
  }
})
.state('main.entrar', {
  url: '/entrar',
  views: {
    'pageContent': {
      templateUrl: 'main/templates/entrar.html',
      controller: 'EntrarCtrl as entrar'
    }
  }
})
.state('main.list', {
  url: '/list',
  views: {
    'pageContent': {
      templateUrl: 'main/templates/list.html',
	// controller: '<someCtrl> as ctrl'
    }
  }
})
.state('main.listDetail', {
  url: '/list/detail',
  views: {
    'pageContent': {
      templateUrl: 'main/templates/list-detail.html',
	// controller: '<someCtrl> as ctrl'
    }
  }
})
.state('main.debug', {
  url: '/debug',
  views: {
    'pageContent': {
      templateUrl: 'main/templates/debug.html',
      controller: 'DebugCtrl as ctrl'
    }
  }
});
});
