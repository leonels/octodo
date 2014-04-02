'use strict'

var octodoApp = angular.module('octodoApp');
octodoApp.factory('List', function($resource) {
  return $resource('/lists/:id', {id: '@id'});
});

octodoApp.factory('Task', function($resource) {
  return $resource('/lists/:listId/tasks/:id', {listId: '@listId', id: '@id'})
});