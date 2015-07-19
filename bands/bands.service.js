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

    var getScore = function() {
      return $http.get(urlScore).then(function(scores) {
      var bandIds = [];
      var uniques;
        scores.data.forEach(function(el) {
          bandIds.push(el.band_id)
          uniques = _.uniq(bandIds)
        })
        return uniques
      })
    };

    var buildScoreUrl = function (id) {
      getScore().then(function(uniques) {
        $rootScope.uniques = uniques
        console.log(uniques);

      })
    }

    // var voteForBand = function(score) {
    //   var score = {};
    //   score.vote = score.vote;
    //   score.band_id = score.band_id;
    //   $http.post(urlScore, score).success(function(resp) {
    //     $rootScope.$broadcast('score:updated');
    //   });
    // };

    var voteForBand = function(score) {
      console.log(score);
      var score = {};
      score.total_score.vote = score.vote;
      $http.put(baseUrl + '/' + id + '.json', score).success(function(resp) {
        $rootScope.$broadcast('score:updated');
      });
    };

    var putScore = function(id, band) {
      console.log(band);
      console.log(id);
      $http.put(baseUrl + '/' + id + '.json', band).success(function(resp) {

        })
      }

  return {
    voteBand: voteForBand,
    getBands: getBands,
    getScore: getScore,
    buildScoreUrl: buildScoreUrl,
    putScore: putScore,
  };
    });
})();
