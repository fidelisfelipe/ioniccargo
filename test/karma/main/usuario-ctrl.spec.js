'use strict';

describe('module: main, controller: UsuarioCtrl', function () {

  // load the controller's module
  beforeEach(module('main'));
  // load all the templates to prevent unexpected $http requests from ui-router
  beforeEach(module('ngHtml2Js'));

  // instantiate controller
  var UsuarioCtrl;
  beforeEach(inject(function ($controller) {
    UsuarioCtrl = $controller('UsuarioCtrl');
  }));

  it('should do something', function () {
    expect(!!UsuarioCtrl).toBe(true);
  });

});
