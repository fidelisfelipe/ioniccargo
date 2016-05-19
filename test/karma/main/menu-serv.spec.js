'use strict';

describe('module: main, service: Menu', function () {

  // load the service's module
  beforeEach(module('main'));
  // load all the templates to prevent unexpected $http requests from ui-router
  beforeEach(module('ngHtml2Js'));

  // instantiate service
  var Menu;
  beforeEach(inject(function (_Menu_) {
    Menu = _Menu_;
  }));

  it('should do something', function () {
    expect(!!Menu).toBe(true);
  });

});
