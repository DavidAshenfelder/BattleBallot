(function () {
  'use strict';
  angular
    .module('admin')
    .factory('AdminService', function ($http, $rootScope) {
    var url = 'http://10.0.10.48:3008/api/bands.json';
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
      $http.delete(url + '/' + id).success(function(resp) {
        $rootScope.$broadcast('band:deleted');
      })
    };
    var updateBand = function(id, updateBand) {
      $http.put(url + '/' + id, updateBand).success(function(resp) {
        $rootScope.$broadcast('band:updated');
      })
    };
    var getBand = function(id) {
      console.log(id);
        return getBands().then(function(bands) {
          console.log(bands);
          var filteredArray = [];
          bands.data.forEach(function(el) {
            el.id = el.id.toString();
            if (el.id === id) {
              filteredArray.push(el);
            }
          })
          console.log(filteredArray);
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
