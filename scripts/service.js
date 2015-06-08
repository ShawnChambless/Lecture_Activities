app = angular.module('routingPractice');
app.service('mainService', function($q) {
    var user = {
        name: 'Shawn'
    }
    this.getUser = function() {
        var dfd = $q.defer();
        dfd.resolve(user);
        return dfd.promise;
    }
});
