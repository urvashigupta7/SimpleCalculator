import React,{useContext} from 'react';
import Key from './key';
import CalculatorContext from '../Context/Calculator/calculatorContext';

const NumericKeys=()=>{
	const calculatorContext=useContext(CalculatorContext);
	var keys=[1,2,3,'+',4,5,6,'-',7,8,9,'*','C',0,'=','/'];
	if(calculatorContext.mode){
		keys.push('sqrt');
		keys.push('^2');
		keys.push('sign');
	}else{
		keys=keys.filter(key=> key!=='sqrt'||key!=='^2'||key!=='sign');
	}
	return(
		<div style={{"width":"100%"}}>{
				keys.map(key=>
						 (<Key key={key} currentkey={key} />)
						)
			}
			</div>
			
		)
	
	
}
export default NumericKeys;