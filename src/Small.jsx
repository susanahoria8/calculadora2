import React from 'react';
import './Button.css';


const Small = ({value}) => {
	function handleClick() {
 	 // Hacer algo cuando se hace clic en el botón
  	console.log({value});
}
	return(

		<div onClick={handleClick} className='btn small'>
			<p className='centrar'>{value}</p>
		</div>

		);
}

export default Small;