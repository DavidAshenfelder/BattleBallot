(function () {
  'use strict';
  angular
    .module('bands')
    .factory('BandsService', function ($http, $rootScope) {

    var url = '';
    var getBands = function() {
      $http.get(url);
    };


  return {
    getBands: getBands,
  }


    });
})();
