'use strict';
angular.module('main')
.directive('customSenhaValidator', function () {
  return {
    template: '<div></div>',
    restrict: 'E',
    link: function postLink (scope, element, attrs) {
      element.text('this is the customSenhaValidator directive', attrs);
    }
  };
});
