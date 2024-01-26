import React, { useState } from 'react';
import './Tablero.css';
import Button from './Button.jsx';
import './Button.css';
import PaneldeBotones from './PaneldeBotones.jsx';

export default function Tablero ({value}){
	
	
	return (

		<div className='head'>
			<div className='result'>{value}</div>			
		</div>

		)
}

 