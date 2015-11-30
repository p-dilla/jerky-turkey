angular.module('myApp').service('EditService', function($http, $location) {
    var vm = this;

    this.updateLink = function(link) {
      $http.put('/link/update/'+ link._id, link)
            .success(function (d) {
                vm.data = d;
                console.log(d);
                $location.path('/dashboard');
            });
    };

    this.updateList = function(list) {
      $http.put('/list/update/'+ list._id, list)
            .success(function (d) {
                vm.data = d;
                console.log(d);
                $location.path('/dashboard');
            });
    };

    this.updateProject = function(project) {
      $http.put('/project/update/'+ project._id, project)
            .success(function (d) {
                vm.data = d;
                console.log(d);
                $location.path('/dashboard');
            });
    };

    // this.updateProject = function(project) {
    //   return $http.get('/project/findby/'+ username)
    //         .success(function (d) {
    //             vm.data = d;
    //             console.log(d);
    //         });
    // };

    // this.deleteLink = function(link) {
    //   return $http.get('/project/findby/'+ username)
    //         .success(function (d) {
    //             vm.data = d;
    //             console.log(d);
    //         });
    // };

    // this.deleteList = function(list) {
    //   return $http.get('/project/findby/'+ username)
    //         .success(function (d) {
    //             vm.data = d;
    //             console.log(d);
    //         });
    // };

    // this.deleteProject = function(project) {
    //   return $http.get('/project/findby/'+ username)
    //         .success(function (d) {
    //             vm.data = d;
    //             console.log(d);
    //         });
    // };

    // this.addItemList = function(list, item) {
    //   return $http.get('/list/update/'+ list._id, list)
    //         .success(function (d) {
    //             vm.data = d;
    //             console.log(d);
    //         });
    // };

    // this.addItemProject = function(project, item) {
    //   return $http.get('/project/update/'+ project._id, project)
    //         .success(function (d) {
    //             vm.data = d;
    //             console.log(d);
    //         });
    // };

});