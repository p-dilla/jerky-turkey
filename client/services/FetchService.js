angular.module('myApp').service('FetchService', function($http) {
    var vm = this;

    this.getUser = function() {
        return $http.get('/user/getCurrent')
            .success(function (d) {
                vm.data = d;
            });
    };

    this.getLink = function(link_id) {
        return $http.get('/search/link/find/'+ link_id)
            .success(function (d) {
                vm.data = d;
            });
    };

    this.getList = function(list_id) {
        return $http.get('/search/list/find/'+ list_id)
            .success(function (d) {
                vm.data = d;
            });
    };

    this.getProject = function(project_id) {
        return $http.get('/search/project/find/'+ project_id)
            .success(function (d) {
                vm.data = d;
            });
    };

    this.getAllLinks = function() {
        return $http.get('/search/link/findall/')
            .success(function (d) {
                vm.data = d;
            });
    };

    this.getAllLists = function() {
        return $http.get('/search/list/findall/')
            .success(function (d) {
                vm.data = d;
            });
    };

    this.getAllProjects = function() {
        return $http.get('/search/project/findall/')
            .success(function (d) {
                vm.data = d;
            });
    };

    this.getLinkByUsername = function(username) {
      return $http.get('/search/link/findby/'+ username)
            .success(function (d) {
                vm.data = d;
            });
    };

    this.getListByUsername = function(username) {
      return $http.get('/search/list/findby/'+ username)
            .success(function (d) {
                vm.data = d;
            });
    };

    this.getProjectByUsername = function(username) {
      return $http.get('/search/project/findby/'+ username)
            .success(function (d) {
                vm.data = d;
            });
    };
});

