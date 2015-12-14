angular.module('myApp').controller('homeController',
  ['$scope', '$http', '$location', 'FetchService', 'AuthService', 
  function ($scope, $http, $location, FetchService, AuthService) {

  	if(AuthService.isLoggedIn()){
  		$scope.loggedIn = true;
  		debugger;
		activate();
      	function activate() {
        	FetchService
      		.getUser()
          	.then(function(){
            	$scope.currentUser = FetchService.data;
  			});
      	}
  	}

  	else {
  		$scope.loggedIn = false;
  	}

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