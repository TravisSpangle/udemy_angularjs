var travisApp = angular.module('travisApp', ['ngRoute']);

travisApp.config(function ($routeProvider) {

  $routeProvider 

  .when('/', {
    templateUrl: 'pages/main.html',
    controller: 'mainController'
  })

  .when('/second', {
    templateUrl: 'pages/second.html',
    controller: 'secondController'
  })

  .when('/second/:num', {
    templateUrl: 'pages/second.html',
    controller: 'secondController'
  })

});

travisApp.controller('mainController', ['$scope', '$location', '$log', function ($scope, $location, $log) {

  $log.info($location.path());
  $scope.name = 'Main';

}]);

travisApp.controller('secondController', ['$scope', '$location', '$log', '$routeParams', function ($scope, $location, $log, $routeParams) {

  $log.info($location.path());
  $scope.name = 'Second';
  $scope.num = $routeParams.num || 1;

}]);
