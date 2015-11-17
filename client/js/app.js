var myApp = angular
.module('myApp', ['ui.router'])
.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("/");
  $stateProvider
    .state('home', {
      url: "/",
      templateUrl: "../views/home.html"
    })
    .state('login', {
      url: "/login",
      templateUrl: "../views/login.html",
      controller: "loginCtrl"
    })
    .state('logout', {
      url: "/logout",
      templateUrl: "../views/logout.html",
      controller: "logoutCtrl"
    })
    .state('register', {
      url: "/register",
      templateUrl: "../views/register.html",
      controller: "registerCtrl"
    })
    .state('dashboard', {
      url: "/dashboard",
      templateUrl: "../views/dashboard.html"
    })
}]);