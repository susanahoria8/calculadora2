import { Component } from 'react';
import './Base.css';
import Tablero from './Tablero.jsx';
import PaneldeBotones from './PaneldeBotones.jsx';
import operaciones from './operaciones.jsx';




class Base extends Component {

	state = {
			total: null,
			siguiente: null,
			operador: null,

		}
	
	handleClick = nameOfButton => this.setState(operaciones(this.state, nameOfButton))



	render(){
	return (
		<>
		<div className='body'>
			<Tablero value={this.state.siguiente || this.state.total || "0"}/>
			
				<PaneldeBotones clickHandle={this.handleClick} />
			
		</div>
		</>
		);
}
}

export default Base;