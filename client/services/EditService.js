angular.module('myApp').service('EditService', function($http, $location) {
    var vm = this;

    // UPDATE=====================
    this.updateLink = function(link) {
      $http.put('/link/update/'+ link._id, link)
            .success(function (d) {
                vm.data = d;
                $location.path('/dashboard');
            })
            .error(function(data) {
                console.log('Error: ' + data);
            })
    };

    this.updateList = function(list) {
      $http.put('/list/update/'+ list._id, list)
            .success(function (d) {
                vm.data = d;
                $location.path('/dashboard');
            })
            .error(function(data) {
                console.log('Error: ' + data);
            })
    };

    this.updateProject = function(project) {
      $http.put('/project/update/'+ project._id, project)
            .success(function (d) {
                vm.data = d;
                $location.path('/dashboard');
            })
            .error(function(data) {
                console.log('Error: ' + data);
            })
    };

    //DELETE===================

    this.deleteLink = function(link) {
      $http.delete('/link/delete/'+ link._id)
            .success(function (d) {
                vm.data = d;
                $location.path('/dashboard');
            })
            .error(function(data) {
                console.log('Error: ' + data);
            })
    };

    this.deleteList = function(list) {
      $http.delete('/list/delete/'+ list._id)
            .success(function (d) {
                vm.data = d;
                $location.path('/dashboard');
            })
            .error(function(data) {
                console.log('Error: ' + data);
            })
    };

    this.deleteProject = function(project) {
      $http.delete('/project/delete/'+ project._id)
            .success(function (d) {
                vm.data = d;
                $location.path('/dashboard');
            })
            .error(function(data) {
                console.log('Error: ' + data);
            })
    };

    //ADD =============================

    this.addLink = function(link) {
        $http.post('/link/create', link)
            .success(function(data) {
                $location.path('/dashboard'); 
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };

    this.addList = function(list) {
        $http.post('/list/create', list)
            .success(function(data) {
                $location.path('/dashboard'); 
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };

    this.addProject = function(project) {
        $http.post('/project/create', project)
            .success(function(data) {
                $location.path('/dashboard'); 
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };

    //ADD items=======================

    this.addItemList = function(list) {
        $http.put('/list/update/'+ list._id, list)
            .success(function(data) {
                $location.path('/dashboard');
            })
            .error(function(data) {
                console.log('Error: ' + data);
            })
    };

    this.addItemProject = function(project) {
        $http.put('/project/update/'+ project._id, project)
            .success(function(data) {
                $location.path('/dashboard');
            })
            .error(function(data) {
                console.log('Error: ' + data);
            })
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