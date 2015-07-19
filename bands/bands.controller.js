(function () {
  'use strict';
  angular
    .module('bands')
    .controller('BandsController', function ($scope, $http, BandsService, $rootScope, AdminService, $routeParams) {
      AdminService.getBands().then(function(bands) {
        console.log(bands);
        $scope.bands = bands.data;
      });

      // var avgScore = function () {
      //   BandsService.buildScoreUrl()
      // }

    //   var getVotes = function () {
    //     BandsService.getScore().then(function () {
    //
    //     });
    // }

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

      $scope.vote = function (scoreCount, bandId) {
        console.log("score in controller:", scoreCount);
        console.log("id in controller:", bandId);
        BandsService.voteBand({vote: Number(scoreCount)}, Number(bandId));
      }

      $scope.updateScore = function (bandId, band) {
        console.log("score in controller:", band);
        console.log("id in controller:", bandId);
        BandsService.putScore(bandId, {band: {total_score: [{vote: band.total_score}]}})
      };
      // {band: {total_score: [{vote: Number(band.total_score)}]}}
      var watchCallback = function() {
        BandsService.getBands();
      };
      // getVotes();
      // avgScore();
      $scope.$on('vote:casted', watchCallback)
    });
})();
