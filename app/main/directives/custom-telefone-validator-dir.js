'use strict';
angular.module('main')
.directive('customTelefoneValidator', function () {
  return {
    template: '<div></div>',
    restrict: 'E',
    link: function postLink (scope, element, attrs) {
      element.text('this is the customTelefoneValidator directive', attrs);
    }
  };
});
