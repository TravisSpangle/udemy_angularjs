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

  $scope.people = [
    {
      name: 'Joe Doe',
      street: '123 Street st',
      city: 'Seattle',
      state: 'WA',
      zip: '98109'
    },
    {
      name: 'John Doe',
      street: '222 Street st',
      city: 'Bothel',
      state: 'WA',
      zip: '98109'
    },
    {
      name: 'Baz Puppy',
      street: '123 Street st',
      city: 'West Seattle',
      state: 'WA',
      zip: '98109'
    }
  ]

  $scope.formattedAddress = function(person) {
    return person.street + ', ' + person.city + ', ' + person.state + ' ' + person.zip;
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
      personObject:"=",
      formattedAddressFunction: "&"
    },
    compile: function(elem, attrs) {
      console.log('compiling ... ');
      //elem.removeAttr('class');
      console.log(elem);

      return {
	pre: function(scope, element, attrs) {
	  console.log('Pre-linking');
	  console.log(element);
	},
	post: function(scope, element, attrs) {
	  console.log('Post-linking');
	  console.log(element);

	  if (scope.personObject.name == 'John Doe') {
	    element.removeAttr('class');
	  }
	}
      }
    }
  }
});
