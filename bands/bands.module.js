(function () {
  'use strict';

  angular
    .module('bands', [
      'ngRoute'
    ])
    .config(function ($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'bands/views/main.html',
          controller: 'BandsController'
        })
        .when('/leaderboard', {
          templateUrl: 'bands/views/leaderboard.html',
          controller: 'BandsController'
        })
        .when('/:id', {
          templateUrl: 'bands/views/band-detail.html',
          controller: 'BandsController'
        })


    });



})();
