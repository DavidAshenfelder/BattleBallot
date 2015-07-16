(function () {
  'use strict';
  angular
    .module('admin')
    .controller('AdminController', function ($scope, AdminService) {
      AdminService.getBands().then(function(bands) {
        $scope.bands = bands;
      })
    });


})();
