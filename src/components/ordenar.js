import React, { PureComponent } from 'react';

class Ordenar extends PureComponent{

	actualizarCantidad=(evento)=>{
		this.props.hacerPedido(this.props.indice, evento.target.value);
	}


	render(){
		return(
			<div>
				<br/>
				<label> Cantidad: </label>
				<input onChange={this.actualizarCantidad} type="number" min="0" max="20"/>
				<label className="EspacioPlatillo"> Precio: {this.props.precio} </label>
			</div>
			)
	}
}

export default Ordenar;