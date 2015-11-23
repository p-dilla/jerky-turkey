var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function ($routeProvider) {
  $routeProvider
    .when('/', {templateUrl: 'partials/home.html'})
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
      access: {restricted: true}
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
