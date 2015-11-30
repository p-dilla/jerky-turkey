angular.module('myApp').controller('editController',
  ['$scope', '$http', '$location', '$routeParams', 'FetchService', 'EditService',
  function ($scope, $http, $location, $routeParams, FetchService, EditService) {

    activate();

      function activate() {
        FetchService
          .getLink($routeParams._id)
          .then(function(){
            $scope.linkForm = FetchService.data;
          });
        FetchService
          .getList($routeParams._id)
          .then(function(){
            $scope.listForm = FetchService.data;
          });
        FetchService
          .getProject($routeParams._id)
          .then(function(){
            $scope.projectForm = FetchService.data;
          });
      }

    $scope.updateLink = function(link) {
        EditService.updateLink(link);
      };

    $scope.updateList = function(list) {
        EditService.updateList(list);
      };

    $scope.updateProject = function(project) {
        EditService.updateProject(project);
      };

 //  	//get link
 //  	$http.get('/link/find/'+ $routeParams._id)
	// 	.success(function(response) {  
	// 		$scope.linkForm = response;
	// 	})

	// //get list
 //  	$http.get('/list/find/'+ $routeParams._id)
	// 	.success(function(response) {  
	// 		$scope.listForm = response;
	// 	})

	// //get project
 //  	$http.get('/project/find/'+ $routeParams._id)
	// 	.success(function(response) {  
	// 		$scope.projectForm = response;
	// 	})

	// //update link
	// $scope.updateLink = function(link) {
	// 	$http.put('/link/update/'+ link._id, link)
	// 	.success(function(data) {
 //            $location.path('/dashboard');
 //            console.log(data);
 //        })
 //        .error(function(data) {
 //            console.log('Error: ' + data);
 //        })
	// };

	// //update list
	// $scope.updateList = function(list) {
	// 	$http.put('/list/update/'+ list._id, list)
	// 	.success(function(data) {
 //            $location.path('/dashboard');
 //            console.log(data);
 //        })
 //        .error(function(data) {
 //            console.log('Error: ' + data);
 //        })
	// };

	// //update project
	// $scope.updateProject = function(project) {
	// 	$http.put('/project/update/'+ project._id, project)
	// 	.success(function(data) {
 //            $location.path('/dashboard');
 //            console.log(data);
 //        })
 //        .error(function(data) {
 //            console.log('Error: ' + data);
 //        })
	// };

	// //delete Link
	// $scope.deleteLink = function(link) {
	// 	$http.delete('/link/delete/'+ link._id)
	// 	.success(function(data) {
 //            $location.path('/dashboard');
 //            console.log(data);
 //        })
 //        .error(function(data) {
 //            console.log('Error: ' + data);
 //        })
	// };

	// //delete List
	// $scope.deleteList = function(list) {
	// 	$http.delete('/list/delete/'+ list._id)
	// 	.success(function(data) {
 //            $location.path('/dashboard');
 //            console.log(data);
 //        })
 //        .error(function(data) {
 //            console.log('Error: ' + data);
 //        })
	// };

	// //delete Project
	// $scope.deleteProject = function(project) {
	// 	$http.delete('/project/delete/'+ project._id)
	// 	.success(function(data) {
 //            $location.path('/dashboard');
 //            console.log(data);
 //        })
 //        .error(function(data) {
 //            console.log('Error: ' + data);
 //        })
	// };

 //    //Add items==================================
 //    //add to list
 //    $scope.linkItem = {
 //        dateAdded: Date.now,
 //        linkName: '',
 //        category: null,
 //        url: '',
 //        createdBy: 'placeholder',
 //        lists: null,
 //        projects: null,
 //        linkSummary: ''
 //    };
 //    //$scope.listForm.createdBy
 //    $scope.addItemList = function(list, item) {
 //    	list.weblinks.push(item);

 //        $http.put('/list/update/'+ list._id, list)
 //        .success(function(data) {
 //            $location.path('/dashboard');
 //            console.log(data);
 //        })
 //        .error(function(data) {
 //            console.log('Error: ' + data);
 //        })
 //    };
 //    //add to project
 //    $scope.addItemProject = function(project, item) {
 //    	project.weblinks.push(item);
    	
 //        $http.put('/project/update/'+ project._id, project)
 //        .success(function(data) {
 //            $location.path('/dashboard');
 //            console.log(data);
 //        })
 //        .error(function(data) {
 //            console.log('Error: ' + data);
 //        })
 //    };
}]);