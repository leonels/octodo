var octodoControllers = angular.module('octodoControllers', []);

octodoControllers('DaListsCtrl', function($scope, $http) {
  $scope.heading = 'Da Lists';
});

/*
octodoControllers.controller('DaListsCtrl', ['$scope', '$http',
  function($scope, $http) {
    $http.get('/lists.json').success(function(data) {
      $scope.lists = data;
    });

    $scope.heading = 'It works from controller';

    $scope.orderProp = 'created_at';
  }]);
*/

octodoControllers.controller('ListCtrl', ['$scope', '$routeParams',
  function($scope, $routeParams) {
    $scope.id = $routeParams.id;
  }]);
