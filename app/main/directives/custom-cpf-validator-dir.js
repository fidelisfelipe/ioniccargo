'use strict';
angular.module('main')
.directive('customCpfValidator', function () {
  return {
    template: '<div></div>',
    restrict: 'E',
    link: function postLink (scope, element, attrs) {
      element.text('this is the customCpfValidator directive', attrs);
    }
  };
});
