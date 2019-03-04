// MODULE
var angularApp = angular.module('travisApp', []);

// CONTROLLERS
angularApp.controller('mainController', ['$scope', '$filter', '$timeout', '$http', function ($scope, $filter, $timeout, $http) {
  $scope.handle = '';

  $scope.lowercasehandle = function() {
    return $filter('lowercase')($scope.handle);
  };

  $scope.characters = 5;

  $scope.rules = [
    {rulename: "Must be 5 characters."},
    {rulename: "Must not be used elsewhere."},
    {rulename: "Must be cool"}
  ];

  $scope.alertClick = function(){
    alert("Clicked!");
  };

}]);
