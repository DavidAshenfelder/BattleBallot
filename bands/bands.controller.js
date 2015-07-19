(function () {
  'use strict';
  angular
    .module('bands')
    .controller('BandsController', function ($scope, BandsService, $rootScope, AdminService) {
      AdminService.getBands().then(function(bands) {
        console.log(bands);
        $scope.bands = bands.data;
      });
      $scope.authenticate = function () {
        return $rootScope.isAuth = true
          console.log($rootScope.isAuth);
      }
    });
})();
