(function () {
  'use strict';

  angular
    .module('bands', [
      'ngRoute'
    ])
    .config(function ($routeProvider) {
      $routeProvider
        .when('/bands', {
          templateUrl: 'views/bands.html',
          controller: 'BandsController'
        })
        .when('bands/:id', {
          templateUrl: 'views/band-detail.html',
          controller: 'BandsController'
        })
        .when('leaderboard', {
          templateUrl: 'views/leaderboard.html',
          controller: 'BandsController'
        })

    });



})();
