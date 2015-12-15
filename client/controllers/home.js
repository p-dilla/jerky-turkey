angular.module('myApp').controller('homeController',
  ['$scope', '$http', '$location', 'FetchService', 'AuthService', 
  function ($scope, $http, $location, FetchService, AuthService) {

	//Check if user is logged in
  	if(AuthService.isLoggedIn()){
  		$scope.loggedIn = true;
  		
		fetchUser();
      	function fetchUser() {
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