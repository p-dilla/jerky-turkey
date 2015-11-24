angular.module('myApp').controller('dashController',
  ['$scope', '$http', 'AppService',
  function ($scope, $http, AppService) {
      activate();

      function activate() {
        AppService.getData().then(function(response){
          $scope.currentUser = response;
          getLinkByUsername(response.username);
          getListByUsername(response.username);
          getProjectByUsername(response.username);
        });

      }
      function getLinkByUsername(username) {
        AppService.getLinkByUsername(username).then(function(response){
          $scope.userLinks = response;
        });
      }
      function getListByUsername(username) {
        AppService.getListByUsername(username).then(function(response){
          $scope.userLists = response;
        });
      }
      function getProjectByUsername(username) {
        AppService.getProjectByUsername(username).then(function(response){
          $scope.userProjects = response;
        });
      }
}]);