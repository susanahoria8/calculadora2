import React, { useState } from 'react';
import './Tablero.css';
import Button from './Button.jsx';
import './Button.css';
import Small from './Small.jsx';
import { numero } from './Numeros.jsx';
import { operador } from './Operador.jsx';

const Tablero = () => {
	
	const [clickedValue, setClickedValue] = useState('');
	console.log(clickedValue)
  	
  	const handleNumberClick = (value) => {
    setClickedValue((prev) => {
    	return prev + value;
    });
    console.log(value)
  };
	return (
		<>
		<div className='head'>
			<p>Valor clickeado: {clickedValue}</p>
			
		</div>
		<div className='container'>
	        	{operador.map((operador) => (
	            	<Small key={operador.id} value={operador.value} />
	         	))}
	          	{numero.map((numero) => (
	            	<Button onClick={handleNumberClick} key={numero.id} id={numero.id} value={numero.value} />
	          	))}					
			</div>
	
		</>
		);
}


export default Tablero;