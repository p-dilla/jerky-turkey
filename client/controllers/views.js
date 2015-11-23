angular.module('myApp').controller('dashController',
  ['$scope', '$http', 'AppService',
  function ($scope, $http, AppService) {
      AppService
        .getData()
        .then(function () {
            $scope.currentUser = AppService.data;
            debugger;
        })
}]);