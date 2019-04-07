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

  $scope.person = {
    name: 'Joe Doe',
    address: '123 Street st, Seattle, WA 98109'
  }

}]);

travisApp.controller('secondController', ['$scope', '$location', '$log', '$routeParams', function ($scope, $location, $log, $routeParams) {


}]);

travisApp.directive("searchResult", function(){
  return {
    restrict: 'A', //Attribute, Element, Class, coMment
    // template:  '<a href="#" class="list-group-item"> <h4 class="list-group-item-heading">Doe, John</h4> <p class="list-group-item-text"> 555 Main St., New York, NY 11111 </p> </a>',
    // Store in a template instead 
    templateUrl: 'directives/searchresult.html',  
    replace: true,
    scope: {
      personName: "@",
      personAddress: "@"
    }
  }
});
