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
          controller: 'AdminController'
        })
        .when('admin/:id', {
          templateUrl: 'views/band-detail.html',
          controller: 'AdminController'
        })


    });



})();
