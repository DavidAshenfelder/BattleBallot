(function () {
  'use strict';
  angular
    .module('admin')
    .directive('detailDirective', function () {
      return {
        restrict: 'E', // E - element, A - attribute, C - class
        templateUrl: 'admin/views/detail.directive.html',
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
