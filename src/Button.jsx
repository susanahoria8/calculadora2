import React, { useState } from 'react';
import './Button.css';

const Button = ({id, value, onClick}) => {
 	const isMas = value === '+';
	const isCero = value === '0';
	
	
	return (
		<>

		<div onClick={() => onClick(value)} className={`btn ${isMas ? 'Mas' : ''} ${isCero ? 'Cero' : ''}`}>
			<p className='centrar'>{value}</p>
		</div>
		</>
		);
}


export default Button;