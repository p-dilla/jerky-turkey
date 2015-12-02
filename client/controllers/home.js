angular.module('myApp').controller('homeController',
  ['$scope', '$http', '$location', 'FetchService', 
  function ($scope, $http, $location, FetchService) {

  	activate();
      //RETRIEVE==============
	  function activate() {
	    FetchService
	      .getAllLinks()
	      .then(function() {
	        $scope.linkList = FetchService.data;
	      });

	    FetchService
	      .getAllLists()
	      .then(function() {
	        $scope.listList = FetchService.data;
	      });

	    FetchService
	      .getAllProjects()
	      .then(function() {
	        $scope.projectList = FetchService.data;
	      });
	  }

  }]);