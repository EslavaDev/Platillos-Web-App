import React, { PureComponent } from 'react';
import VarTiendaController from '../controllers/tiendaController';
import { observer } from 'mobx-react';

class Pedidos extends PureComponent{
	render(){
		return(
			<div className="container col-md-6">
				<div>
					<div className="panel panel-primary">
						<div className="list-group Pedidos-Menu" >
						{VarTiendaController.platillos.map((value, index)=> (
              (value.cantidad != 0)&&
                  <div className="list-group-item" key={index}>
                    <div className="panel-body">
                      <h4> {value.nombre} </h4><br/>
                      <div className="APrecioCantidad">
                        <span>Cantidad: {value.cantidad}</span>
                        <span className="PrecioPlatillo">Precio: {value.cantidad*value.precio}</span>
                      </div>
                    </div>
                  </div>
                  
              ))}
						{
              VarTiendaController.bebidas.map((value, index)=> (
                      (value.cantidad != 0)&&
                        <div className="list-group-item" key={index}>
                          <div className="panel-body">
                            <h4> {value.nombre} </h4><br/>
                            <div className="APrecioCantidad">
                              <span>Cantidad: {value.cantidad}</span>
                              <span className="PrecioPlatillo">Precio: {value.cantidad*value.precio}</span>
                            </div>
                          </div>
                        </div>
                      
                    ))}
						</div>
					</div>
				</div>
			</div>
			)
	}
}

export default observer(Pedidos);