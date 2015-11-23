angular.module('myApp').controller('dashController',
  ['$scope', '$http', 'AppService',
  function ($scope, $http, AppService) {
      debugger;
      activate();

      function activate() {
        AppService.getData().then(function(response){
          $scope.currentUser = response;
          getByUsername(response.username);
        });

      }
      function getByUsername(username) {
        AppService.getByUsername(username).then(function(response){
          $scope.userLinks = response;
        });
      }
}]);