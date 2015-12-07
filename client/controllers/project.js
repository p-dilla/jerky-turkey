angular.module('myApp').controller('projectController',
  ['$scope', '$http', '$location', '$stateParams', 'FetchService', 'EditService', 'moment',
  function ($scope, $http, $location, $stateParams, FetchService, EditService, moment) {

    if($location.path() !== '/dashboard/add-project'){
      activate();
      //RETRIEVE==============
      function activate() {
        FetchService
          .getProject($stateParams._id)
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
      FetchService.getUser()
        .then(function() {
          project.createdBy = FetchService.data.username;
          EditService.addProject(project);
        });
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