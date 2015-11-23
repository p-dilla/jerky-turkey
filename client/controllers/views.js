angular.module('myApp').controller('dashController',
  ['$rootScope', '$http', 'myService',
  function ($rootScope, $http, myService) {

    myService.async().then(function() {
      $rootScope.currentUser = myService.data();

    });
      debugger;
      // var theUser = new AppService;
      // var current = AppService.getUser();

    $http.get('/link/findby/'+ $rootScope.currentUser )
    	.then(function(result) {
        $rootScope.userLinks = result.data;
        console.log(result.data);
      });
}]);