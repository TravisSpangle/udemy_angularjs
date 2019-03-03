// MODULE
var angularApp = angular.module('travisApp', []);

// CONTROLLERS
angularApp.controller('mainController', ['$scope', function ($scope) {
  $scope.name = 'Joe Doe';
  $scope.occupation = 'Coder';

  console.log('scope', $scope);
}]);

var sayHello = function(name){
  return 'Hello World';
}

console.log('functions return as a string', sayHello);
console.log('Use Angular to perform dependency injection', angular.injector().annotate(sayHello));
