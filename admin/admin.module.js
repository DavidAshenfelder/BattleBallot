(function () {
  'use strict';

  angular
    .module('admin', [
      'ngRoute'
    ])
    .config(function ($routeProvider) {
      $routeProvider
        .when('/admin', {
          templateUrl: 'admin/views/main-admin.html',
          controller: 'AdminController'
        })
        .when('/admin/:id', {
          templateUrl: 'admin/views/band-detail.html',
          controller: 'AdminController'
        })
        .when('/admin/add-band', {
          templateUrl: 'admin/views/add-band.html',
          controller: 'AdminController'
        })


    });



})();
