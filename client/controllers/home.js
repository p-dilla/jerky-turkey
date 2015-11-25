angular.module('myApp').controller('homeController',
  ['$scope', '$http', '$location', 
  function ($scope, $http, $location) {
  	//get all links
  	$http.get('/link/findall/')
		.success(function(response) {  
			$scope.linkList = response;
		})

	//get all lists
  	$http.get('/list/findall/')
		.success(function(response) {  
			$scope.listList = response;
		})


	//get all projects
  	$http.get('/project/findall/')
		.success(function(response) {  
			$scope.projectList = response;
		})

  }]);