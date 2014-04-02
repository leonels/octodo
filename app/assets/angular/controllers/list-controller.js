'use strict';
 
var octodoApp = angular.module('octodoApp');
 
octodoApp.controller('ListIndexController', function($scope, List) {
    //Grab all lists from the server
    $scope.items = List.query();
 
    //Destroy method for deleting a list
    $scope.destroy = function(index) {
 
        //Tell the server to remove the object
        List.remove({id: $scope.items[index].id}, function() {
            //If successful, remove it from our collection
            $scope.items.splice(index, 1);
        });
    }
});
 
octodoApp.controller('ListCreateController', function($scope, $location, List) {
    //The save method which is called when the user wants to submit their data
    $scope.save = function() {
 
        //Create the forum object to send to the back-end
        var list = new List($scope.list);
 
        //Save the forum object
        list.$save(function() {
 
            //Redirect us back to the main page
            $location.path('/');
 
        }, function(response) {
 
            //Post response objects to the view
            $scope.errors = response.data.errors;
        });
    }
});
 
//A controller to show the forum and all it's glory
octodoApp.controller('ListShowController', function($scope, List, Task, $routeParams) {
    //Grab the list from the server
    $scope.list = List.get({id: $routeParams.id})
});