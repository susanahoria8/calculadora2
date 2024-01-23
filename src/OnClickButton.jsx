import React from 'react';

const OnClickButton = () =>{

 function handleNumberClick = ({value}) => {
   if (this.state.operador === '') {
    this.setState({ numero1: this.state.numero1 + value });
  } else {
    this.setState({ numero2: this.state.numero2 + value });
  }
}

function handleOperatorClick = (operador) => {
  this.setState({ operador });
}

function handleCalculate = () => {
  const { numero1, operador, numero2 } = this.state;
  let resultado = 0;

  switch (operador) {
    case '+':
      resultado = parseInt(numero1) + parseInt(numero2);
      break;
    case '-':
      resultado = parseInt(numero1) - parseInt(numero2);
      break;
    case '*':
      resultado = parseInt(numero1) * parseInt(numero2);
      break;
    case '/':
      resultado = parseInt(numero1) / parseInt(numero2);
      break;
    default:
      break;
  }

  this.setState({ resultado });
}
 	
	
}


export default Button;
