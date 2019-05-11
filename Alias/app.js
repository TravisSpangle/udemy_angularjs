var travisApp = angular.module('travisApp', [])
  .controller('stateController', ['$scope', function ($scope) {
    $scope.category = "Object";
  }]).controller('parentController', ['$scope', function ($scope) {
    this.label = 'Parent ' + $scope.category;
  }]).controller('childController', ['$scope', function ($scope) {
    this.label = 'Child ' + $scope.category;
}]);
