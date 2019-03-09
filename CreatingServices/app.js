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

travisApp.service('nameService', function(){
  var self = this;
  this.name = "John Does";

  this.namelength = function(){
    return self.name.length;
  };
});

travisApp.controller('mainController', ['$scope', '$location', '$log', 'nameService', function ($scope, $location, $log, nameService) {

  $log.info($location.path());
  //$scope.name = 'Main';
  $scope.name = nameService.name

  $scope.$watch('name', function(){
    nameService.name = $scope.name;
  });

  $log.log(nameService.name);
  $log.log(nameService.namelength());

}]);

travisApp.controller('secondController', ['$scope', '$location', '$log', '$routeParams', 'nameService', function ($scope, $location, $log, $routeParams, nameService) {

  $log.info($location.path());
  $scope.num = $routeParams.num || 1;

  $scope.$watch('name', function(){
    nameService.name = $scope.name;
  });

  $scope.name = nameService.name

}]);
