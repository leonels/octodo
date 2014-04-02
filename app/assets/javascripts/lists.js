var octodoApp = angular.module('octodoApp', [
  'ngRoute',
  'octodoControllers'
]);

octodoApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/lists', {
        templateUrl: '/lists/list_of_lists.html',
        controller: 'DaListsCtrl'
      }).
      when('/lists/:id', {
        templateUrl: 'lists/:id',
        controller: 'ListCtrl'
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);
