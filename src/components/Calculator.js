import React,{useContext} from 'react';
import Theme from './Theme';
import Result from './result';
import Keypad from './keypad';
import CalculatorContext from '../Context/Calculator/calculatorContext'
const Calculator=()=>{
	const calculatorContext=useContext(CalculatorContext);
	
	return(
		<div className={calculatorContext.theme}>	
	<Theme/>
			<div className={`calculatorapp ${calculatorContext.theme}`}>
			<div style={{"width":"50%","margin":"50px auto"}}>
			<Result/>
			<Keypad/>
				</div>
				
			</div>
		</div>)
	
}

export default Calculator;