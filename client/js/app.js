var linkApp = angular
.module('linkApp', ['ui.router'])
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
      controller: "loginController"
    })
    .state('register', {
      url: "/register",
      templateUrl: "../views/register.html",
      controller: "registerController"
    })
}]);