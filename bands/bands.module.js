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
        .when('bands/:id', {
          templateUrl: 'bands/views/band-detail.html',
          controller: 'BandsController'
        })


    });



})();
