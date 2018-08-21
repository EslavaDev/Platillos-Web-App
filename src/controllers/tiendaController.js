import { extendObservable } from 'mobx';

class TiendaController {
    constructor() {
        extendObservable(this, {
            platillos: [
                {
                    nombre: 'platillo1',
                    descripcion: 'descripcion',
                    precio: 100,
                    cantidad: 0
                },
                {
                    nombre: 'platillo2',
                    descripcion: 'descripcion',
                    precio: 150,
                    cantidad: 0
                },
                {
                    nombre: 'platillo3',
                    descripcion: 'descripcion',
                    precio: 200,
                    cantidad: 0
                }],
                bebidas: [
                    {nombre: 'primerBebida',
                        descripcion: 'bebida muy rica',
                        precio: 20,
                        cantidad: 0},
                    {nombre: 'segundaBebida',
                        descripcion: 'bebida muy rica',
                        precio: 30,
                        cantidad: 0},
                    {nombre: 'tercerBebida',
                        descripcion: 'bebida muy rica',
                        precio: 40,
                        cantidad: 0}]
        });
    }

    ponerEnLaOrden(i, cantidad) {
            this.platillos.forEach((value, index) => {
                if(i === index) {
                     this.platillos[index].cantidad = cantidad;
                }
            }
        )
    }

    bebidasEnLaOrden(indicePlatillo, cantidadPlatillo){
		this.bebidas.forEach((value, index)=>{
				if(indicePlatillo === index){
					this.bebidas[index].cantidad = cantidadPlatillo;
				}
			}
		)
	}

}
var VarTiendaController = new TiendaController()

export default VarTiendaController;