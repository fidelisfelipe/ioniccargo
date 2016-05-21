'use strict';

describe('module: auth, controller: AuthCtrl', function () {

  // load the controller's module
  beforeEach(module('auth'));
  // load all the templates to prevent unexpected $http requests from ui-router
  beforeEach(module('ngHtml2Js'));

  // instantiate controller
  var AuthCtrl;
  beforeEach(inject(function ($controller) {
    AuthCtrl = $controller('AuthCtrl');
  }));

  it('should do something', function () {
    expect(!!AuthCtrl).toBe(true);
  });

});
