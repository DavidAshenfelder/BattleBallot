(function () {
  'use strict';
  angular
    .module('admin')
    .factory('AdminService', function ($http, $rootScope) {

      var url = 'http://lit-lowlands-6334.herokuapp.com/api/bands.json'
      var url2 = 'http://lit-lowlands-6334.herokuapp.com/api/bands'
    // var url = 'http://10.0.10.48:3008/api/bands.json';

    var getBands = function() {
      return $http.get(url);
    };
    var addBand = function(newBand) {
      console.log("BAND", {band: newBand})
      $http.post(url, newBand).success(function(resp) {
        $rootScope.$broadcast('band:added');

      })
    };
    var deleteBand = function(id) {
        $http.delete(url2 + '/' + id + '.json').success(function(resp) {
        $rootScope.$broadcast('band:deleted');
      })
    };
    var updateBand = function(id, updateBand) {
      console.log(url2 + '/' + id + '.json');
      $http.put(url2 + '/' + id + '.json', updateBand).success(function(resp) {
        $rootScope.$broadcast('band:updated');
      })
    };
    var getBand = function(id) {
        var bandId = id;
        return getBands().then(function(bands) {
          var filteredArray = [];
          bands.data.forEach(function(el) {
            el.id = el.id.toString();

            if (el.id === bandId) {
              filteredArray.push(el);
            }
          })
            return filteredArray[0];
        })

      };
  return {
    getBands: getBands,
    addBand: addBand,
    deleteBand: deleteBand,
    updateBand: updateBand,
    getBand: getBand
  }

    });
})();
