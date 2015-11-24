angular.module('myApp').controller('viewController',
  ['$scope', '$http', '$routeParams', 
  function ($scope, $http, $routeParams) {

  	//get link
  	$http.get('/link/find/'+ $routeParams._id)
		.success(function(response) {  
			$scope.linkItem = response;
		})
	//get list
  	$http.get('/list/find/'+ $routeParams._id)
		.success(function(response) {  
			$scope.listItem = response;
		})
	//get project
  	$http.get('/project/find/'+ $routeParams._id)
		.success(function(response) {  
			$scope.projectItem = response;
		})

  }]);