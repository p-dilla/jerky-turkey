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

	//delete Link
	$scope.deleteLink = function(link) {
		$http.delete('/link/delete/'+ link._id)
		.success(function(data) {
            $location.path('/dashboard');
            console.log(data);
        })
        .error(function(data) {
            console.log('Error: ' + data);
        })
	};

	//delete List
	$scope.deleteList = function(list) {
		$http.delete('/list/delete/'+ list._id)
		.success(function(data) {
            $location.path('/dashboard');
            console.log(data);
        })
        .error(function(data) {
            console.log('Error: ' + data);
        })
	};

	//delete Project
	$scope.deleteProject = function(project) {
		$http.delete('/project/delete/'+ project._id)
		.success(function(data) {
            $location.path('/dashboard');
            console.log(data);
        })
        .error(function(data) {
            console.log('Error: ' + data);
        })
	};

	//add list to Link
	$scope.addList = function(link) {
		$http.post('/link/updatelist/'+ link._id)
		.success(function(data) {
            console.log("link array updated");
        })
        .error(function(data) {
            console.log('Error: ' + data);
        })
	};
}]);