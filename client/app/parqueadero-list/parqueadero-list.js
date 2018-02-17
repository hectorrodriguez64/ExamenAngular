'use strict';

angular.module('paraisoCiclistaApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('parqueadero-list', {
        url: '/parqueadero-list',
        template: '<parqueadero-list></parqueadero-list>'
      });
  });
