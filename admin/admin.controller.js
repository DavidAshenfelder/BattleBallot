(function () {
  'use strict';
  angular
    .module('admin')
    .controller('AdminController', function ($scope, $rootScope, AdminService, $routeParams) {
      AdminService.getBands().then(function(bands) {
        console.log(bands);
        $scope.bands = bands.data;
      });
      $rootScope.authenticate = function () {
        $rootScope.isAuth = true
          console.log($rootScope.isAuth);
      }
      $rootScope.unAuthenticate = function () {
        $rootScope.isAuth = false
          console.log($rootScope.isAuth);
      }
      var getBands = function() {
        AdminService.getBands().then(function(bands) {
          $scope.bands = bands.data;
        });
      };
      if($routeParams.id) {
        AdminService.getBand($routeParams.id).then(function(band) {
        $scope.band = band;
        });
      };
      $scope.updateBand = function(id, updateBand) {
        AdminService.updateBand(id, updateBand)
      };
      $scope.addBand = function(newBand) {
        console.log(newBand);
        AdminService.addBand(newBand);
      };
      $scope.vote = function (scoreCount, bandId) {
        console.log("score in controller:", scoreCount);
        console.log("id in controller:", bandId);
        BandsService.voteBand({vote: Number(scoreCount), band_id: Number(bandId)});
        $scope.$broadcast('vote:casted');
      }
      var watchCallback = function() {
      };

      $scope.$on('band:deleted', watchCallback)
      $scope.$on('band:added', getBands)
      $scope.$on('band:updated', getBands)
    });
})();
