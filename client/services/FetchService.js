angular.module('myApp').service('FetchService', function($http) {
    var vm = this;

    this.getUser = function() {
        return $http.get('/user/getCurrent')
            .success(function (d) {
                vm.data = d;
                console.log(d);
            });
    };

    this.getLinkByUsername = function(username) {
      return $http.get('/link/findby/'+ username)
            .success(function (d) {
                vm.data = d;
                console.log(d);
            });
    };

    this.getListByUsername = function(username) {
      return $http.get('/list/findby/'+ username)
            .success(function (d) {
                vm.data = d;
                console.log(d);
            });
    };

    this.getProjectByUsername = function(username) {
      return $http.get('/project/findby/'+ username)
            .success(function (d) {
                vm.data = d;
                console.log(d);
            });
    };
});

//fetch items by User=========================================
//-------------------------------------------
// angular.module('myApp').factory('AppService', function($http, $q) {
//     var appServiceFactory = {};

//   // @_getData
//   var _getData = function () {
//       var deferred = $q.defer();
      
//       $http.get('/user/getCurrent').success(function (response) {

//           deferred.resolve(response);

//       }).error(function (err, status) {
//           deferred.reject(err);
//       });

//       return deferred.promise;
//   };

//   var _getLinkByUsername = function (username) {
//       var deferred = $q.defer();
      
//       $http.get('/link/findby/'+ username).success(function (response) {

//           deferred.resolve(response);

//       }).error(function (err, status) {
//           deferred.reject(err);
//       });

//       return deferred.promise;
//   };

//   var _getListByUsername = function (username) {
//       var deferred = $q.defer();
      
//       $http.get('/list/findby/'+ username).success(function (response) {

//           deferred.resolve(response);

//       }).error(function (err, status) {
//           deferred.reject(err);
//       });

//       return deferred.promise;
//   };

//   var _getProjectByUsername = function (username) {
//       var deferred = $q.defer();
      
//       $http.get('/project/findby/'+ username).success(function (response) {

//           deferred.resolve(response);

//       }).error(function (err, status) {
//           deferred.reject(err);
//       });

//       return deferred.promise;
//   };

//   appServiceFactory.getData = _getData;
//   appServiceFactory.getLinkByUsername = _getLinkByUsername;
//   appServiceFactory.getListByUsername = _getListByUsername;
//   appServiceFactory.getProjectByUsername = _getProjectByUsername;
//   return appServiceFactory;
// });
