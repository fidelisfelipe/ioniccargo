'use strict';
angular.module('main')
.directive('customDateValidator', function () {
  return {
    template: '<div></div>',
    restrict: 'E',
    link: function postLink (scope, element, attrs) {
      element.text('this is the customDateValidator directive', attrs);
    }
  };
});
