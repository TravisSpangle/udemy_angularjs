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

// Services ________________________________________________________

weatherApp.service('cityService', function(){
  this.city = "New York, NY";
});

// Controllers _____________________________________________________
weatherApp.controller('homeController', ['$scope', 'cityService',
  function($scope, cityService){
    $scope.city = cityService.city;
    $scope.$watch('city', function() {
      cityService.city = $scope.city;
    });
}]);

weatherApp.controller('forcastController', ['$scope', 'cityService', 
  function($scope, cityService){
    $scope.city = cityService.city;
}]);
