'use strict';
(function(){

class ParqueaderoComponent {
  constructor(parqueaderoService) {
    this.parqueaderoService = parqueaderoService;
  }

   $onInit(){
      this.parqueaderoService.query().$promise
      .then(response=>{
        console.log('Parqueo lista', response);
        this.parqueo = response;
      })
      .catch(err=>{console.log('error',err);
      });
  }

buscarParqueo(){
  for(var i = 0; i < this.parqueo.length; i++){
    if(this.parqueo[i].codigoFicha == this.parqueo.codigoFicha){
      this.itemCodigo = this.parqueo[i];
    }
  }

  this.valorParqueo();
 }

  valorParqueo(){
  	if(this.itemCodigo.horas <= 3){
  		this.itemCodigo.precio = this.itemCodigo.horas * 2
  	}
  	else if(this.itemCodigo.horas <= 5){
  		this.itemCodigo.precio = ((this.itemCodigo.horas-3)*1.5) + 2
  	}
  	else if(this.itemCodigo.horas > 5){
  		this.itemCodigo.precio = (((this.itemCodigo.horas-5)*1.5)+4.5)
  		this.descuento = this.itemCodigo.precio * 0.05
  		this.itemCodigo.precio = this.itemCodigo.precio-this.descuento
    }
  }
}

ParqueaderoComponent.$inject = ['parqueaderoService'];
angular.module('paraisoCiclistaApp')
  .component('parqueadero', {
    templateUrl: 'app/parqueadero/parqueadero.html',
    controller: ParqueaderoComponent,
    controllerAs: 'vm'
  });

})();
