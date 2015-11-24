var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'partials/home.html',
      controller: 'homeController',
      access: {restricted: false}
    })
    .when('/login', {
      templateUrl: 'partials/login.html',
      controller: 'loginController',
      access: {restricted: false}
    })
    .when('/logout', {
      controller: 'logoutController',
      access: {restricted: true}
    })
    .when('/register', {
      templateUrl: 'partials/register.html',
      controller: 'registerController',
      access: {restricted: false}
    })
    .when('/dashboard', {
      templateUrl: 'partials/dash.html',
      controller: 'dashController',
      access: {restricted: false}
    })
    .when('/add-project', {
      templateUrl: 'partials/add-project.html',
      controller: 'addController',
      access: {restricted: true}
    })
    .when('/add-list', {
      templateUrl: 'partials/add-list.html',
      controller: 'addController',
      access: {restricted: true}
    })
    .when('/add-link', {
      templateUrl: 'partials/add-link.html',
      controller: 'addController',
      access: {restricted: true}
    })
    .when('/view-link/:_id', {
      templateUrl: 'partials/view-link.html',
      controller: 'viewController',
      access: {restricted: false}
    })
    .when('/view-list/:_id', {
      templateUrl: 'partials/view-list.html',
      controller: 'viewController',
      access: {restricted: false}
    })
    .when('/view-project/:_id', {
      templateUrl: 'partials/view-project.html',
      controller: 'viewController',
      access: {restricted: false}
    })
    .when('/edit-link/:_id', {
      templateUrl: 'partials/edit-link.html',
      controller: 'editController',
      access: {restricted: true}
    })
    .when('/edit-list/:_id', {
      templateUrl: 'partials/edit-list.html',
      controller: 'editController',
      access: {restricted: true}
    })
    .when('/edit-project/:_id', {
      templateUrl: 'partials/edit-project.html',
      controller: 'editController',
      access: {restricted: true}
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
