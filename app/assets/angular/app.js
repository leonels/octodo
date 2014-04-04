/* App Module */
var app = angular.module('app', [
  'ngRoute',
  'appControllers'
]);

/* Controllers */
var appControllers = angular.module('appControllers', []);

appControllers.controller('ListIndexController', ['$scope', '$http',
  function($scope, $http) {
    $http.get('/lists.json').success(function(data) {
      $scope.lists = data;
      $scope.page_title = "eitale!"
      $scope.orderProp = 'created_at';
    });
  }]);

/* Routes */
app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/lists', {
        templateUrl: 'test.html',
        controller: 'ListIndexController'
      }).
      /* when('/phones/:phoneId', {
        templateUrl: 'partials/phone-detail.html',
        controller: 'PhoneDetailCtrl'
      }). */
      otherwise({
        redirectTo: '/phones'
      });
  }]);