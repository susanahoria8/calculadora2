import React, { useState } from 'react';
import './Button.css';

export default function Button ({clickHandle, name}) {
	const handleClick = () => clickHandle(name)
 		
	return (
	
		<div>
			<button onClick={handleClick}>{name}</button>
		</div>

		);
}

