'use strict';

angular.module('paraisoCiclistaApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('parqueadero', {
        url: '/parqueadero',
        template: '<parqueadero></parqueadero>'
      });
  });
