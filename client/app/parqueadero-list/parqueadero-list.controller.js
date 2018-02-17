'use strict';
(function(){

class ParqueaderoListComponent {
  constructor(parqueaderoService) {
    this.parqueaderoService = parqueaderoService;
  }

  $onInit() {
           this.parqueaderoService.query().$promise
               .then(response => {
                   this.parqueoa = response;
               })
               .catch(err => {
               })
       }
}

angular.module('paraisoCiclistaApp')
  .component('parqueaderoList', {
    templateUrl: 'app/parqueadero-list/parqueadero-list.html',
    controller: ParqueaderoListComponent
  });

})();
