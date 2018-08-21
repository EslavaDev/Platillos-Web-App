import React from 'react';
import TiendaController from '../controllers/tiendaController';
import Ordenar from './ordenar';
import logo from '../logo.svg';
import './platillos.css';

const Platillos = (props) => (
    <div className="container col-md-6">
      <div>
        <div className="panel panel-primary"></div>
          <div className="list-group Platillo-Menu">
          {
            TiendaController.platillos.map((value,i)=>(
              <div className="list-group-item" key={i}>
              <div className="panel-body">
                <img role="presentation" src={logo} className="ImagenPlatillo"/>
                <h2 className="TitlePlatillo"> {value.nombre} </h2>
                <div className="DescripcionPlatillo"> {value.descripcion} </div>
                <Ordenar precio={value.precio} indice={i} 
                hacerPedido={(indice_d, evento_d)=>
                  {TiendaController.ponerEnLaOrden(indice_d, evento_d)}}/>
              </div>
            </div>
            ))
          }
          </div>
      </div>
    </div>
  )

export default Platillos;
