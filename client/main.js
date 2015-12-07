var myApp = angular.module('myApp', ['ui.router', 'angularMoment']);

myApp.config(function ($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');  
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'views/home.html',
      controller: 'homeController'
    })
    .state('repo', {
      url: '/repo',
      templateUrl: 'views/view-repo.html',
      controller: 'homeController'
    })
    .state('login', {
      url: '/login',
      templateUrl: 'views/login.html',
      controller: 'loginController'
    })
    .state('logout', {
      url: '/logout',
      controller: 'logoutController'
    })
    .state('register', {
      url: '/register',
      templateUrl: 'views/register.html',
      controller: 'registerController'
    })
    .state('dashboard', {
      url: '/dashboard',
      templateUrl: 'views/dashboard.html',
      controller: 'dashController'
    })
    .state('dashboard.view-dash', {
      url: '/view-dash',
      templateUrl: 'views/dashboard.view-dash.html',
      controller: 'dashController'
    })
    .state('dashboard.add-project', {
      url: '/add-project',
      templateUrl: 'views/dashboard.add-project.html',
      controller: 'projectController'
    })
    .state('dashboard.add-list', {
      url: '/add-list',
      templateUrl: 'views/dashboard.add-list.html',
      controller: 'listController'
    })
    .state('dashboard.add-link', {
      url: '/add-link',
      templateUrl: 'views/dashboard.add-link.html',
      controller: 'linkController'
    })
    .state('dashboard.view-link', {
      url: '/view-link/:_id',
      templateUrl: 'views/dashboard.view-link.html',
      controller: 'linkController'
    })
    .state('dashboard.view-list', {
      url: '/view-list/:_id',
      templateUrl: 'views/dashboard.view-list.html',
      controller: 'listController'
    })
    .state('dashboard.view-project', {
      url: '/view-project/:_id',
      templateUrl: 'views/dashboard.view-project.html',
      controller: 'projectController'
    })
    .state('dashboard.edit-link', {
      url: '/edit-link/:_id',
      templateUrl: 'views/dashboard.edit-link.html',
      controller: 'linkController'
    })
    .state('dashboard.edit-list', {
      url: '/edit-list/:_id',
      templateUrl: 'views/dashboard.edit-list.html',
      controller: 'listController'
    })
    .state('dashboard.edit-project', {
      url: '/edit-project/:_id',
      templateUrl: 'views/dashboard.edit-project.html',
      controller: 'projectController'
    })
    .state('dashboard.add-item-list', {
      url: '/add-item-list/:_id',
      templateUrl: 'views/dashboard.item-list.html',
      controller: 'listController'
    })
    .state('dashboard.add-item-project', {
      url: '/add-item-project/:_id',
      templateUrl: 'views/dashboard.item-project.html',
      controller: 'projectController'
    })
});

// myApp.run(function ($rootScope, $location, $route, AuthService) {
//   $rootScope.$on('$routeChangeStart', function (event, next, current) {
//     if (next.access.restricted && AuthService.isLoggedIn() === false) {
//       $location.path('/login');
//       $route.reload();
//     }
//   });
// });
