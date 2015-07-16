(function () {
  'use strict';

  angular
    .module('admin', [
      'ngRoute'
    ])
    .config(function ($routeProvider) {
      $routeProvider
        .when('/admin', {
          templateUrl: 'views/main.html',
          controller: 'BandsController'
        })
        .when('admin/:id', {
          templateUrl: 'views/band-detail.html',
          controller: 'BandsController'
        })


    });



})();
