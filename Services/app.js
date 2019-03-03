// MODULE
var angularApp = angular.module('travisApp', ['ngMessages', 'ngResource']);

// CONTROLLERS
angularApp.controller('mainController', function ($scope, $log, $filter, $resource) {
  console.log($scope);
  console.log($log);

  $log.log("Hello.");
  $log.info("This is some info");
  $log.warn("Warning!");
  $log.debug("Whats this about?");
  $log.error("error");


  $scope.name = 'John';
  $scope.formattedname = $filter('uppercase')($scope.name);

  $log.info($scope.name);
  $log.info($scope.formattedname);
});
