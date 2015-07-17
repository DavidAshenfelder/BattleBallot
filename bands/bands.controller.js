(function () {
  'use strict';
  angular
    .module('bands')
    .controller('BandsController', function ($scope, BandsService, $rootScope) {
      $scope.authenticate = function () {
        return $rootScope.isAuth = true
          console.log($rootScope.isAuth);
      }
    });
})();
