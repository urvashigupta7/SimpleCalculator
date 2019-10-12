import React,{useContext,Fragment} from 'react';
import CalculatorContext from '../Context/Calculator/calculatorContext';

const Key=(props)=>{
	const calculatorContext=useContext(CalculatorContext);
	const onClick=(e)=>{
		
		if(e.target.value==='='){
			
			try{
				//eslint-disable-next-line
			let val=eval(calculatorContext.text);		
			calculatorContext.setResult(val);
			}catch(e){
				calculatorContext.setResult('');
			}
			
		}
		else if(e.target.value==='^2'){
			try{
				//eslint-disable-next-line
			 let val= eval(calculatorContext.text*calculatorContext.text)
			calculatorContext.setResult(val);
			}catch(e){
				calculatorContext.setResult('');
			}
		}
		else if(e.target.value==='sign'){
			try{
				//eslint-disable-next-line
				let val=eval(calculatorContext.text);
				//eslint-disable-next-line
				val=eval(-val);
				calculatorContext.setResult(val);
			}catch(e){
				calculatorContext.setResult('');
			}
		}
		else if(e.target.value==='sqrt'){
			try{
				//eslint-disable-next-line
				let val=eval(calculatorContext.text);
				val=Math.sqrt(val);
				calculatorContext.setResult(val);
			}catch(e){
				calculatorContext.setResult('');
			}
		}
		else if(e.target.value==='C'){
			calculatorContext.setResult('');
		}
		else{
		calculatorContext.setText(e.target.value);
		}
	}
	return(
		<Fragment>
		<button value={props.currentkey} onClick={onClick}className={`keypad ${calculatorContext.calctheme}`}>{props.currentkey} </button>
			</Fragment>
	)
	
}
export default Key;