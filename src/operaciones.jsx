import Big from "big.js"
import operate from "./operate.js"
import isNumber from "./isNumber.js"

export default function operaciones (estado, nameOfButton) {

	if (nameOfButton === "CE") {
		return {
			total: null,
			siguiente: null,
			operador: null
		};
	}

	if (isNumber(nameOfButton)) {
		
		if (nameOfButton === "0" && estado.siguiente === "0") return {data:"ninguna"}

		if (estado.operador) {

			if (estado.siguiente) return {siguiente: estado.siguiente + nameOfButton}
			
			return { siguiente: nameOfButton}
		}

		if (estado.siguiente) {
			
			const siguiente = estado.siguiente === "0" ? nameOfButton : estado.siguiente + nameOfButton;

			return {
				siguiente, 
				total: null,
			}
		}
		return {
			siguiente: nameOfButton, 
			total: null,
		}
	}
	if (nameOfButton ==="%"){

		if (estado.operador && estado.siguiente){

			const result = operate(estado.total, estado.siguiente, estado.operador)

			return{
				total: Big(result)
					.div(Big("100"))
					.toString(),
				siguiente: null,
				operador: null,

			}
		}

		if (estado.siguiente) {
			return {
				siguiente: Big(estado.siguiente)
					.div(Big("100"))
					.toString(),
			}
		}

		return {};

	}



	// Logica para Decimales

	 if (nameOfButton === ".") {
  
      if (estado.siguiente) {
        
        if (estado.siguiente.includes(".")) return {}
  
        return { siguiente: estado.siguiente + "." }
      }
  
      return { siguiente: "0." }
  
    }
// Igual
	if (nameOfButton === "=") {

		if (estado.siguiente && estado.operador) {
			
			return {
				total: operate(estado.total, estado.siguiente, estado.operador),
				siguiente: null,
				operador: null
				}
		} else return {}

		
	}
	 if (nameOfButton === "+/-") {
  
      if (estado.siguiente) return { siguiente: (-1 * parseFloat(estado.siguiente)).toString() }
  
      if (estado.total) return { total: (-1 * parseFloat(estado.total)).toString() }
  
      return {}
  
    }

	if (estado.operador) {
		return {
			total: operate(estado.total, estado.siguiente, estado.operador),
			siguiente: null,
			operador: nameOfButton,
		}
	}

	if (!estado.siguiente) return {operador: nameOfButton}

	return {
		total: estado.siguiente,
		siguiente: null,
		operador: nameOfButton
	}

}