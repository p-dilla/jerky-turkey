angular.module('myApp').controller('dashController',
  ['$scope', '$http',
  function ($scope, $http) {
    $http.get('/user/getCurrent')
      .then(function(result) {
        $scope.currentUser = result.data;
      });
      
    $http.get('/link/findby/'+ 'jon')
    	.then(function(result) {
        $scope.userLinks = result.data;
        console.log(result.data);
      });
}]);