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
  this.city = "Seattle";
});

// Controllers _____________________________________________________
weatherApp.controller('homeController', ['$scope', 'cityService',
  function($scope, cityService){
    $scope.city = cityService.city;
    $scope.$watch('city', function() {
      cityService.city = $scope.city;
    });
}]);

weatherApp.controller('forcastController', ['$scope', '$resource', 'cityService', 
  function($scope, $resource, cityService){
    $scope.city = cityService.city;
     
    $scope.weatherAPI = $resource("http://api.openweathermap.org/data/2.5/weather", {callback: "JSON_CALLBACK" }, {get: { method: "JSONP" }});
    var result = $scope.weatherAPI.get({q: $scope.city, appid: '676671b2b34cd5008c75cb818d89c3eb' }, function(){
      $scope.weather = result.weather[0];
    });

}]);
