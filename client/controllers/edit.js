angular.module('myApp').controller('editController',
  ['$scope', '$http', '$routeParams', 
  function ($scope, $http, $routeParams) {

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
}]);