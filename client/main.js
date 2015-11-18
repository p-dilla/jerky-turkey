var myApp = angular
.module('myApp', ['ui.router'])
.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("/");
  $stateProvider
    .state('home', {
      url: "/",
      templateUrl: "./views/home.html",
      data: { auth: "public"}
    })
    .state('login', {
      url: "/login",
      templateUrl: "./views/login.html",
      controller: "loginCtrl",
      data: { auth: "public"}
    })
    .state('logout', {
      url: "/logout",
      templateUrl: "./views/logout.html",
      controller: "logoutCtrl",
      data: { auth: "restricted"}
    })
    .state('register', {
      url: "/register",
      templateUrl: "./views/register.html",
      controller: "registerCtrl",
      data: { auth: "public"}
    })
    .state('dashboard', {
      url: "/dashboard",
      templateUrl: "./views/dashboard.html",
      data: { auth: "restricted"}
    })

}]);

myApp.run(function($rootScope, $location, $state, AuthService){
  $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams){
    if ( toState.data.auth === 'restricted' && AuthService.isLoggedIn() === false ) {
      $location.path('/login');
    }
  })
});
