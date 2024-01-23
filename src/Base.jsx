import React, { Component } from 'react';
import './Base.css';
import Tablero from './Tablero.jsx';




class Base extends Component {

	// El constructor se utiliza para inicializar el estado del componente. 
	constructor() {
		super()
		this.state = {
			numero1: '',
			numero2: '',
			operador:'',
			resultado:''

		}
	}

//Método que se ejecuta cuando el valor del campo de búsqueda cambia.
	onSearchChange = (event) => {
		this.setState({numero1: event.target.value})
		
	}

	render(){
	return (
		<>
		<div className='body'>
			<Tablero/>
		</div>
		</>
		)
}
}

export default Base;