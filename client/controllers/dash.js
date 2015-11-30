angular.module('myApp').controller('dashController',
  ['$scope', '$http', 'FetchService',
  function ($scope, $http, FetchService) {
      
      activate();

      function activate() {
        FetchService
          .getUser()
          .then(function(){
            $scope.currentUser = FetchService.data;
            getLinkByUsername(FetchService.data.username);
            getListByUsername(FetchService.data.username);
            getProjectByUsername(FetchService.data.username);
          });
      }

      function getLinkByUsername(username) {
        FetchService
          .getLinkByUsername(username)
          .then(function () {
              $scope.userLinks = FetchService.data;
          });
      }

      function getListByUsername(username) {
        FetchService
          .getListByUsername(username)
          .then(function () {
              $scope.userLists = FetchService.data;
          });
        }

      function getProjectByUsername(username) {
        FetchService
          .getProjectByUsername(username)
          .then(function () {
              $scope.userProjects = FetchService.data;
          });
      }

      // activate();

      // function activate() {
      //   AppService.getData().then(function(response){
      //     $scope.currentUser = response;
      //     getLinkByUsername(response.username);
      //     getListByUsername(response.username);
      //     getProjectByUsername(response.username);
      //   });

      // }
      // function getLinkByUsername(username) {
      //   AppService.getLinkByUsername(username).then(function(response){
      //     $scope.userLinks = response;
      //   });
      // }

      // function getListByUsername(username) {
      //   AppService.getListByUsername(username).then(function(response){
      //     $scope.userLists = response;
      //   });
      // }
      
      // function getProjectByUsername(username) {
      //   AppService.getProjectByUsername(username).then(function(response){
      //     $scope.userProjects = response;
      //   });
      // }
}]);