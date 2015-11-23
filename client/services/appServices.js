angular.module('myApp').factory('AppService', function($http, $q) {
    var appServiceFactory = {};

  // @_getData
  var _getData = function () {
      var deferred = $q.defer();
      
      $http.get('/user/getCurrent').success(function (response) {

          deferred.resolve(response);

      }).error(function (err, status) {
          deferred.reject(err);
      });

      return deferred.promise;
  };

  var _getByUsername = function (username) {
      var deferred = $q.defer();
      
      $http.get('/link/findby/'+ username).success(function (response) {

          deferred.resolve(response);

      }).error(function (err, status) {
          deferred.reject(err);
      });

      return deferred.promise;
  };

  appServiceFactory.getData = _getData;
  appServiceFactory.getByUsername = _getByUsername;
  return appServiceFactory;
});
