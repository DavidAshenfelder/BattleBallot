(function () {
  'use strict';
  angular
    .module('main')
    .directive('bandDirective', function () {
      return {
        restrict: 'E', // E - element, A - attribute, C - class
        templateUrl: 'views/main.directive.html',
        scope: {
          band: '=',
          extra: '@',
          editBand: '&'
        },
        link: function (scope, element, attributes) {


        }
      };
    });
})();
