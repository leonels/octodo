var octodoApp = angular.module('octodoApp', ['ngResource']);

// octodoApp.controller('ListsCtrl', ['$scope', 'List', function($scope, List) {
octodoApp.controller('ListsCtrl', function($scope, $http) {
  $scope.heading = 'Lists';
  // $scope.lists = List.query();

  $http.get('/lists.json').success(function(data) {
  	$scope.lists = data;
  });

  $scope.orderProp = 'title';
});

// octodoApp.factory('List', function($resource){
  /*

    if the controller is only responding with json, $resource('/lists') would have been enough
    
    if the controller is responding with formats other than json, then you have to specify
    that json is being received, like so '/lists.json'
    save yourself another 45 minutes of troubleshootin! 
  
  */
//  return $resource('/lists.json');
// });