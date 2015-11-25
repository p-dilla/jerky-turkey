angular.module('myApp').controller('addController',
  ['$scope', '$http', '$location',
  function ($scope, $http, $location) {
    $http.get('/user/getCurrent')
      .then(function(result) {
        $scope.currentUser = result.data;
      })
    $scope.addLink = function() {
        $scope.linkForm.createdBy = $scope.currentUser.username;
        $http.post('/link/create', $scope.linkForm)
            .success(function(data) {
                $scope.linkForm = {}; // clear the form 
                console.log(data);
                $location.path('/dashboard'); //switch to dashboard view
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };
    $scope.addList = function() {
        $scope.listForm.createdBy = $scope.currentUser.username;
        $http.post('/list/create', $scope.listForm)
            .success(function(data) {
                $scope.listForm = {}; // clear the form 
                console.log(data);
                $location.path('/dashboard'); //switch to dashboard view
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };
    $scope.addProject = function() {
        $scope.projectForm.createdBy = $scope.currentUser.username;
        $http.post('/project/create', $scope.projectForm)
            .success(function(data) {
                $scope.projectForm = {}; // clear the form 
                console.log(data);
                $location.path('/dashboard'); //switch to dashboard view
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };
}]);