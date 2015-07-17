(function () {
  'use strict';

  angular
    .module('main', [
      'ngRoute',
      'underscore',
      'admin',
      'bands'
    ])
    .config(function ($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'bands/views/main.html',
          controller: 'BandsController'
        })
        .when('/404', {
          template: '<h2>Sorry, page not found</h2>'
        })
        .otherwise({
          redirectTo: '/404'
        });
    });
    angular
      .module('underscore', [])
      .factory('_', function ($window) {
        return $window._;
      });



})();
