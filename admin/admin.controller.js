(function () {
  'use strict';
  angular
    .module('admin')
    .controller('AdminController', function ($scope, AdminService, $routeParams) {
      AdminService.getBands().then(function(bands) {
        console.log(bands);
        $scope.bands = bands.data;
      });
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
      var watchCallback = function() {
      };

      $scope.$on('band:deleted', watchCallback)
      $scope.$on('band:added', getBands)
      $scope.$on('band:updated', getBands)
    });
})();
