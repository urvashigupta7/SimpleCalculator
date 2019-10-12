import React,{useContext,Fragment} from 'react';
import CalculatorContext from '../Context/Calculator/calculatorContext';

const Result=()=>{
	const calculatorContext=useContext(CalculatorContext);
	return(
	<Fragment>
			<input  className={`result ${calculatorContext.calctheme}`} type='text' defaultValue={calculatorContext.text}/>
			
		</Fragment>)

}
export default Result;