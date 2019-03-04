// MODULE
var angularApp = angular.module('travisApp', ['ngMessages', 'ngResource']);

// CONTROLLERS
angularApp.controller('mainController', ['$scope', '$timeout', '$filter', function ($scope, $timeout, $filter) {

  $scope.name = "Travis";

  $timeout(function(){
    $scope.name = 'Everybody';
  }, 3000);

  $scope.handle = '';

  $scope.lowercasehandle = function() {
    return $filter('lowercase')($scope.handle);
  };

}]);
