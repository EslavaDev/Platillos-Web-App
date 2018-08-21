import React, { Component } from 'react';
import TiendaName from '../components/tiendaName';
import PlatilloContainer  from './Platillo-Container'
import Pedidos from '../components/pedidos';

class Lienzo extends Component {
    render() {
        return (
            <div className="container">
                <TiendaName name={"Tiendita lufita"} />
                <PlatilloContainer/>
                
                <Pedidos /> 
            </div>
        );
    }
}

export default Lienzo;