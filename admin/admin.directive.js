(function () {
  'use strict';
  angular
    .module('admin')
    .directive('bandDirective', function () {
      return {
        restrict: 'E', // E - element, A - attribute, C - class
        templateUrl: 'admin/views/main.directive.html',
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
