'use strict';

// Declare app level module which depends on views, and components
angular.module('intcalcApp', [
  'ngRoute',
  'intcalcApp.view1',
  'intcalcApp.view2'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/view1'});
}]);
