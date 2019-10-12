import React,{useContext} from 'react';
import CalculatorContext from '../Context/Calculator/calculatorContext';
const Theme=()=>{
	const calculatorContext=useContext(CalculatorContext);
	const onClick=(e)=>{
		if(e.target.value==='scientific'){
			calculatorContext.setMode(!calculatorContext.mode);
		}else{
		const calctheme="calc"+e.target.value;
		 calculatorContext.setTheme(e.currentTarget.value);
		calculatorContext.setCalcTheme(calctheme);
		}
	}
	return(
	<div >
		<button value='light' onClick={onClick}  className='button button-l'>Light</button>
		<button value='dark' onClick={onClick} className= 'button button-d'>Dark</button>
		<button value='scientific' onClick={onClick} className='button button-r scientific'>Scientific Mode</button>	
			</div>

		)
}
export default Theme;