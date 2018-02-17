'use strict';
function parqueaderoService($resource,API){
	return $resource(API+'/api/parqueadero/:id',{
		id:'@id'
	},{
		update:{
			method:'PUT'
		}

	});
}

parqueaderoService.$inject = ['$resource', 'API'];
angular.module('paraisoCiclistaApp')
  .factory('parqueaderoService', parqueaderoService);
