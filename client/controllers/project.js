angular.module('myApp').controller('projectController',
  ['$scope', '$http', '$location', '$routeParams', 'FetchService', 'EditService',
  function ($scope, $http, $location, $routeParams, FetchService, EditService) {

    if($location.path() !== '/add-project'){
      activate();
      //RETRIEVE==============

      function activate() {
        FetchService
          .getProject($routeParams._id)
          .then(function(){
            $scope.projectForm = FetchService.data;
            $scope.projectItem = FetchService.data;
          });
      }
    }

    //UPDATE==========

    $scope.updateProject = function(project) {
        EditService.updateProject(project);
      };

    //DELETE=========   

    $scope.deleteProject = function(project) {
        EditService.deleteProject(project);
      };

    //CREATE==================

    $scope.addProject = function(project) {
        project.createdBy = FetchService.getUser();
        EditService.addProject(project);
    };

    $scope.linkItem = {
        dateAdded: Date.now,
        linkName: '',
        category: null,
        url: '',
        createdBy: 'placeholder',
        lists: null,
        projects: null,
        linkSummary: ''
    };

    $scope.addItemProject = function(project, item) {
        project.weblinks.push(item);
        EditService.addItemProject(project);
    };

}]);