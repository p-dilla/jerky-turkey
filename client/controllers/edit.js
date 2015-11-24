angular.module('myApp').controller('editController',
  ['$scope', '$http', '$location', '$routeParams', 
  function ($scope, $http, $location, $routeParams) {

  	//get link
  	$http.get('/link/find/'+ $routeParams._id)
		.success(function(response) {  
			$scope.linkForm = response;
		})
	//get list
  	$http.get('/list/find/'+ $routeParams._id)
		.success(function(response) {  
			$scope.listForm = response;
		})
	//get project
  	$http.get('/project/find/'+ $routeParams._id)
		.success(function(response) {  
			$scope.projectForm = response;
		})

	//update link
	$scope.updateLink = function(link) {
		$http.put('/link/update/'+ link._id, link)
		.success(function(data) {
            $location.path('/dashboard');
            console.log(data);
        })
        .error(function(data) {
            console.log('Error: ' + data);
        })
	};
	//update list
	$scope.updateList = function(list) {
		debugger;
		$http.put('/list/update/'+ list._id, list)
		.success(function(data) {
            $location.path('/dashboard');
            console.log(data);
        })
        .error(function(data) {
            console.log('Error: ' + data);
        })
	};
	//update project
	$scope.updateProject = function(project) {
		$http.put('/project/update/'+ project._id, project)
		.success(function(data) {
            $location.path('/dashboard');
            console.log(data);
        })
        .error(function(data) {
            console.log('Error: ' + data);
        })
	};
}]);