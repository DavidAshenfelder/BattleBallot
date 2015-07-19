(function () {
  'use strict';
  angular
    .module('bands')
    .controller('BandsController', function ($scope, $http, BandsService, $rootScope, AdminService, $routeParams) {
      AdminService.getBands().then(function(bands) {
        console.log(bands);
        $scope.bands = bands.data;
      });

      var avgScore = function () {
        BandsService.buildScoreUrl().then(function () {
        });
      }

      var getVotes = function () {
        BandsService.getScore().then(function (uniques) {
          $scope.uniques = uniques;
        });
    }

      var getBands = function() {
        BandsService.getBands().then(function(bands) {
          $scope.bands = bands.data;
        });
      };
      if($routeParams.id) {
        BandsService.getBand($routeParams.id).then(function(band) {
        $scope.band = band;
        })
      };

      //
      // $scope.authenticate = function () {
      //   $rootScope.isAuth = true
      //     console.log($rootScope.isAuth);
      // }

      $scope.vote = function (scoreCount, bandId) {
        console.log("score in controller:", scoreCount);
        console.log("id in controller:", bandId);
        BandsService.voteBand({vote: Number(scoreCount), band_id: Number(bandId)});
      }
      var watchCallback = function() {
        BandsService.getBands();
      };
      getVotes();
      // avgScore();
      $scope.$on('vote:casted', watchCallback)
    });
})();
