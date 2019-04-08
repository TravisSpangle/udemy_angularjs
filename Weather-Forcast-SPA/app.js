var weatherApp = angular.module('weatherApp', ['ngRoute','ngResource']);


// Routes __________________________________________________________

weatherApp.config(function ($routeProvider) {

  $routeProvider 

  .when('/', {
    templateUrl: 'pages/home.htm',
    controller: 'homeController'
  })

  .when('/forecast', {
    templateUrl: 'pages/forecast.htm',
    controller: 'forcastController'
  })

});

// Controllers _____________________________________________________
weatherApp.controller('homeController', ['$scope', function($scope){
}]);

weatherApp.controller('forcastController', ['$scope', function($scope){
}]);
