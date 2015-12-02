var myApp = angular.module('myApp', ['ngRoute', 'angularMoment']);

myApp.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/home.html',
      controller: 'homeController',
      access: {restricted: false}
    })
    .when('/repo', {
      templateUrl: 'views/view-repo.html',
      controller: 'homeController',
      access: {restricted: false}
    })
    .when('/login', {
      templateUrl: 'views/login.html',
      controller: 'loginController',
      access: {restricted: false}
    })
    .when('/logout', {
      controller: 'logoutController',
      access: {restricted: true}
    })
    .when('/register', {
      templateUrl: 'views/register.html',
      controller: 'registerController',
      access: {restricted: false}
    })
    .when('/dashboard', {
      templateUrl: 'views/dash.html',
      controller: 'dashController',
      access: {restricted: false}
    })
    .when('/add-project', {
      templateUrl: 'views/add-project.html',
      controller: 'projectController',
      access: {restricted: false}
    })
    .when('/add-list', {
      templateUrl: 'views/add-list.html',
      controller: 'listController',
      access: {restricted: false}
    })
    .when('/add-link', {
      templateUrl: 'views/add-link.html',
      controller: 'linkController',
      access: {restricted: false}
    })
    .when('/view-link/:_id', {
      templateUrl: 'views/view-link.html',
      controller: 'linkController',
      access: {restricted: false}
    })
    .when('/view-list/:_id', {
      templateUrl: 'views/view-list.html',
      controller: 'listController',
      access: {restricted: false}
    })
    .when('/view-project/:_id', {
      templateUrl: 'views/view-project.html',
      controller: 'projectController',
      access: {restricted: false}
    })
    .when('/edit-link/:_id', {
      templateUrl: 'views/edit-link.html',
      controller: 'linkController',
      access: {restricted: false}
    })
    .when('/edit-list/:_id', {
      templateUrl: 'views/edit-list.html',
      controller: 'listController',
      access: {restricted: false}
    })
    .when('/edit-project/:_id', {
      templateUrl: 'views/edit-project.html',
      controller: 'projectController',
      access: {restricted: false}
    })
    .when('/add-item-list/:_id', {
      templateUrl: 'views/item-list.html',
      controller: 'listController',
      access: {restricted: false}
    })
    .when('/add-item-project/:_id', {
      templateUrl: 'views/item-project.html',
      controller: 'projectController',
      access: {restricted: false}
    })
    .otherwise({redirectTo: '/'});
});

myApp.run(function ($rootScope, $location, $route, AuthService) {
  $rootScope.$on('$routeChangeStart', function (event, next, current) {
    if (next.access.restricted && AuthService.isLoggedIn() === false) {
      $location.path('/login');
      $route.reload();
    }
  });
});
