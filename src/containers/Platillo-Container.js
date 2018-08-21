import React, { Component } from 'react';
import Platillos from '../components/platillos';
import Bebidas from '../components/bebidas';

class PlatilloContainer extends Component {
    render() {
        return (
                <div>
                <Platillos />
                <Bebidas />
                </div>
        );
    }
}

export default PlatilloContainer;