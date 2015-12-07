angular.module('myApp').controller('linkController',
  ['$scope', '$http', '$location', '$stateParams', 'FetchService', 'EditService', 'moment',
  function ($scope, $http, $location, $stateParams, FetchService, EditService, moment) {
    console.log($location.path());
    if($location.path() !== '/dashboard/add-link'){
      activate();
      //RETRIEVE==============
      function activate() {
        FetchService
          .getLink($stateParams._id)
          .then(function(){
            $scope.linkForm = FetchService.data;
            $scope.linkItem = FetchService.data;
          });
      }
    }

    //UPDATE==========
    $scope.updateLink = function(link) {
        EditService.updateLink(link);
      };

    //DELETE=========   
    $scope.deleteLink = function(link) {
        EditService.deleteLink(link);
      };

    //CREATE==================
    $scope.addLink = function(link) {
        FetchService.getUser()
          .then(function() {
            link.createdBy = FetchService.data.username;
            link.dateAdded = new moment();
            EditService.addLink(link);
          });
      };

}]);