// MODULE
var angularApp = angular.module('travisApp', []);

// CONTROLLERS
angularApp.controller('mainController', ['$scope', '$filter', '$timeout', function ($scope, $filter, $timeout) {

  $scope.handle = '';

  $scope.lowercasehandle = function(){
    return $filter('lowercase')($scope.handle);
  };

  $scope.$watch('handle', function(newValue, oldValue){

    console.info('Changed!');
    console.log('Old:' + oldValue);
    console.log('New:' + newValue);
  });

  setTimeout(function() {
    // Using $apply we can notify Angular 
    //  that a change is happening.
    $scope.$apply(function(){
      $scope.handle = 'newtwitterhandle';
      console.log('Scope changed!');
    });
  }, 3000);


  // we can avoid complicated troubleshooting by 
  //   sticking with the Angular Library
  $timeout(function() {
    $scope.handle = 'othertwitterhandle';
    console.log('Scope changed!');
  }, 6000);

}]);
