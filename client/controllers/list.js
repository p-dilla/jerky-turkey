angular.module('myApp').controller('listController',
  ['$scope', '$http', '$location', '$stateParams', 'FetchService', 'EditService', 'moment',
  function ($scope, $http, $location, $stateParams, FetchService, EditService, moment) {

    if($location.path() !== '/dashboard/add-list'){
      activate();
      //RETRIEVE==============
      function activate() {
        FetchService
          .getList($stateParams._id)
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
        FetchService.getUser()
          .then(function() {
            list.createdBy = FetchService.data.username;
            EditService.addList(list);
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

    $scope.addItemList = function(list, item) {
        list.weblinks.push(item);
        EditService.addItemList(list);
    };
}]);