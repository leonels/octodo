'use strict'

var app = angular.module('app', []);

app.factory('List', function($resource) {
  return $resource('/lists/:id', {id: '@id'});
});

app.factory('Task', function($resource) {
  return $resource('/lists/:listId/tasks/:id', {listId: '@listId', id: '@id'})
});