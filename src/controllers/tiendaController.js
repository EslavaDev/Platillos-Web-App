import {extendObservable} from 'mobx';

class TiendaController {
    constructor() {
        extendObservable(this,{
            platillos: [
                {
                    nombre: 'platillo1',
                    descripcion: 'descripcion',
                    precio: 100,
                    cantidad:0
                },
                {
                    nombre: 'platillo2',
                    descripcion: 'descripcion',
                    precio: 100,
                    cantidad:0
                },
                {
                    nombre: 'platillo3',
                    descripcion: 'descripcion',
                    precio: 100,
                    cantidad:0
                }]
        });
    }

}

export default  TiendaController;;