//login==================================
angular.module('myApp').controller('loginCtrl',
  ['$scope', '$location', 'AuthService',
  function ($scope, $location, AuthService) {

    // console.log(AuthService.getUserStatus());

    $scope.login = function () {

      // initial values
      $scope.error = false;
      $scope.disabled = true;

      // call login from service
      AuthService.login($scope.loginForm.username, $scope.loginForm.password)
        // handle success
        .then(function () {
          $location.path('/dashboard');
          $scope.disabled = false;
          $scope.loginForm = {};
          console.log(user);
        })
        // handle error
        .catch(function () {
          $scope.error = true;
          $scope.errorMessage = "Invalid username and/or password";
          $scope.disabled = false;
          $scope.loginForm = {};
        });
    };
}]);

//logout==================================
angular.module('myApp').controller('logoutCtrl',
  ['$scope', '$location', 'AuthService',
  function ($scope, $location, AuthService) {

    $scope.logout = function () {

      // console.log(AuthService.getUserStatus());

      // call logout from service
      AuthService.logout()
        .then(function () {
          $location.path('/login');
        });

    };

}]);

//register==================================
angular.module('myApp').controller('registerCtrl',
  ['$scope', '$location', 'AuthService',
  function ($scope, $location, AuthService) {

    // console.log(AuthService.getUserStatus());

    $scope.register = function () {

      // initial values
      $scope.error = false;
      $scope.disabled = true;

      // call register from service
      AuthService.register($scope.registerForm.username, $scope.registerForm.password)
        // handle success
        .then(function () {
          $location.path('/login');
          $scope.disabled = false;
          $scope.registerForm = {};
        })
        // handle error
        .catch(function () {
          $scope.error = true;
          $scope.errorMessage = "Something went wrong!";
          $scope.disabled = false;
          $scope.registerForm = {};
        });

    };

}]);

// //dashboard==================================
// angular.module('myApp').controller('dashCtrl',
//   ['$scope', 'AuthService',
//   function ($scope, AuthService) {
//     $scope.username = AuthService.userInfo;
//     console.log(AuthService.userInfo);
// }]);

