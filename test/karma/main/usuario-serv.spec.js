'use strict';

describe('module: main, service: Usuario', function () {

  // load the service's module
  beforeEach(module('main'));
  // load all the templates to prevent unexpected $http requests from ui-router
  beforeEach(module('ngHtml2Js'));

  // instantiate service
  var Usuario;
  beforeEach(inject(function (_Usuario_) {
    Usuario = _Usuario_;
  }));

  it('should do something', function () {
    expect(!!Usuario).toBe(true);
  });

});
