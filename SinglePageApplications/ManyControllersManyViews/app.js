var travisApp = angular.module('travisApp', []);

travisApp.controller('mainController', ['$scope', function ($scope) {
  $scope.name = 'Main';
}]);

travisApp.controller('littleController', ['$scope', function ($scope) {
  $scope.name = '_main_';
}]);
