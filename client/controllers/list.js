angular.module('myApp').controller('listController',
  ['$scope', '$http', '$location', '$routeParams', 'FetchService', 'EditService',
  function ($scope, $http, $location, $routeParams, FetchService, EditService) {

    if($location.path() !== '/add-list'){
      activate();
      //RETRIEVE==============

      function activate() {
        FetchService
          .getList($routeParams._id)
          .then(function(){
            $scope.listForm = FetchService.data;
            $scope.listItem = FetchService.data;
          });
      }
    }
    
    //UPDATE==========

    $scope.updateList = function(list) {
        EditService.updateList(list);
      };

    //DELETE=========   

    $scope.deleteList = function(list) {
        EditService.deleteList(list);
      };

    //CREATE==================

    $scope.addList = function(list) {
        list.createdBy = FetchService.getUser();
        EditService.addList(list);
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
}]);