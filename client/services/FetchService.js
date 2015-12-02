angular.module('myApp').service('FetchService', function($http) {
    var vm = this;

    this.getUser = function() {
        return $http.get('/user/getCurrent')
            .success(function (d) {
                vm.data = d;
            });
    };

    this.getLink = function(link_id) {
        return $http.get('/link/find/'+ link_id)
            .success(function (d) {
                vm.data = d;
            });
    };

    this.getList = function(list_id) {
        return $http.get('/list/find/'+ list_id)
            .success(function (d) {
                vm.data = d;
            });
    };

    this.getProject = function(project_id) {
        return $http.get('/project/find/'+ project_id)
            .success(function (d) {
                vm.data = d;
            });
    };

    this.getAllLinks = function() {
        return $http.get('/link/findall/')
            .success(function (d) {
                vm.data = d;
            });
    };

    this.getAllLists = function() {
        return $http.get('/list/findall/')
            .success(function (d) {
                vm.data = d;
            });
    };

    this.getAllProjects = function() {
        return $http.get('/project/findall/')
            .success(function (d) {
                vm.data = d;
            });
    };

    this.getLinkByUsername = function(username) {
      return $http.get('/link/findby/'+ username)
            .success(function (d) {
                vm.data = d;
            });
    };

    this.getListByUsername = function(username) {
      return $http.get('/list/findby/'+ username)
            .success(function (d) {
                vm.data = d;
            });
    };

    this.getProjectByUsername = function(username) {
      return $http.get('/project/findby/'+ username)
            .success(function (d) {
                vm.data = d;
            });
    };
});

