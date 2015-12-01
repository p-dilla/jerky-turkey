angular.module('myApp').controller('editController',
  ['$scope', '$http', '$location', '$routeParams', 'FetchService', 'EditService',
  function ($scope, $http, $location, $routeParams, FetchService, EditService) {

    activate();

    //RETRIEVE==============

      function activate() {
        FetchService
          .getLink($routeParams._id)
          .then(function(){
            $scope.linkForm = FetchService.data;
          });
        FetchService
          .getList($routeParams._id)
          .then(function(){
            $scope.listForm = FetchService.data;
          });
        FetchService
          .getProject($routeParams._id)
          .then(function(){
            $scope.projectForm = FetchService.data;
          });
      }

    //UPDATE==========

    $scope.updateLink = function(link) {
        EditService.updateLink(link);
      };

    $scope.updateList = function(list) {
        EditService.updateList(list);
      };

    $scope.updateProject = function(project) {
        EditService.updateProject(project);
      };

    //DELETE=========   

    $scope.deleteLink = function(link) {
        EditService.deleteLink(link);
      };

    $scope.deleteList = function(list) {
        EditService.deleteList(list);
      };

    $scope.deleteProject = function(project) {
        EditService.deleteProject(project);
      };

    //CREATE==================

    $scope.addLink = function(link) {
        link.createdBy = FetchService.getUser();
        EditService.addLink(link);
    };

    $scope.addList = function(list) {
        list.createdBy = FetchService.getUser();
        EditService.addList(list);
    };

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

    $scope.addItemList = function(list, item) {
        list.weblinks.push(item);
        EditService.addItemList(list);
    };

    $scope.addItemProject = function(project, item) {
        project.weblinks.push(item);
        EditService.addItemProject(project);
    };
}]);