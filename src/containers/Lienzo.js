import React, { Component } from 'react';
import TiendaName from '../components/tiendaName';
import Platillos from '../components/platillos';
import Pedidos from '../components/pedidos';
class Lienzo extends Component {
    render() {
        return (
            <div className="container">
                <TiendaName name={"Tiendita lufita"} />
                <Platillos />
                <Pedidos /> 
            </div>
        );
    }
}

export default Lienzo;