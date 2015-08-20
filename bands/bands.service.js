(function () {
  'use strict';
  angular
    .module('bands')
    .factory('BandsService', function ($http, $rootScope) {
    var urlBands = 'http://lit-lowlands-6334.herokuapp.com/api/bands.json';
    var urlScore = 'http://lit-lowlands-6334.herokuapp.com/api/scores.json';
    var baseUrl ='http://lit-lowlands-6334.herokuapp.com/api/bands';

    var getBands = function() {
       return $http.get(urlBands);
    };

    var voteForBand = function(score) {
      console.log(score);
      $http.post(urlScore, score).success(function(resp) {
      });
    };

  return {
    voteBand: voteForBand,
    getBands: getBands,
  };
    });
})();
