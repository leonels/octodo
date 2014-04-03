'use strict';
/*
    This is our main launch point from Angular. We'll put anything to do with the
    general well being of our app in this file. For now it'll basically just contain
    the routing information.

    Our module will be called 'app'.
 */
angular.module('app', ['ngResource'])
  .config(['$routeProvider', function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/',          {controller: 'ListIndexController',    templateUrl: "<%= asset_path('templates/index.html') %>"})
      .when('/lists/new', {controller: 'ListCreateController',   templateUrl: "<%= asset_path('templates/new.html') %>"})
      .when('/lists/:id', {controller: 'ListShowController',     templateUrl: "<%= asset_path('templates/show.html') %>"})
      .otherwise({redirectTo: '/'});
}]);