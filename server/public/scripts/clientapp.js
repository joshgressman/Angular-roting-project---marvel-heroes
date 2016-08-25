var conf = confirm("WARNING: site contains graphic content, do you wish to view?")

var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/home', {
      templateUrl: '/views/home.html',
      controller: "HomeController"
    })
    .when('/orders', {
      templateUrl: '/views/orders.html',
      controller: "OrdersController"
    })
    .when('/cats', {
      templateUrl: '/views/cats.html',
      controller: "OrdersController"
    })
    .otherwise({
      redirectTo: 'home'
    })
}]);
