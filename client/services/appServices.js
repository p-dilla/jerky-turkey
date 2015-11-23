angular.module('myApp').factory('AppService', function($http) {
    var vm = this;
    var data = [];

    this.getUser = function() {
        return $http.get('/user/getCurrent')
            .success(function (d) {
                vm.data = d;
                console.log(d);
            });
    };
});