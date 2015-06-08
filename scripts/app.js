/* global angular: true */
/* global app: true */

app = angular.module('routingPractice', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider.when('/home', {
        templateUrl: 'html/page1.html',
        controller: 'ctrl1',
        resolve: {
            user: function(service) {
                return service.getUser();
            }
        }
    })
    .when('/away/:lat', {
        templateUrl: '/html/away.html',
        controller: 'ctrl2',
        resolve: {
            weather: function(service, $route) {
                console.log($route.curent.params);
            }
        }
    })
    .otherwise('home');
});
