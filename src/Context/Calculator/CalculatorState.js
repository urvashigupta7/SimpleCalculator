import React,{useReducer} from 'react';
import CalculatorContext from './calculatorContext';
import CalculatorReducer from './calculatorReducer';
import {SET_THEME,
		SET_TEXT,
		SET_RESULT,
		SET_CALCTHEME,
		SET_SCIENMODE
	   } from '../types';

const CalculatorState=(props)=>{
	const initialState={
		theme:'light',
		text:'',
		calctheme:'calclight',
		mode:false
	
	}
	const [state,dispatch]=useReducer(CalculatorReducer,initialState)

     const setTheme=(themename)=>{
		 dispatch({type:SET_THEME,payload:themename});
	 }
	 const setText=(val)=>{
		 dispatch({type:SET_TEXT,payload:val});
	 }
	 const setResult=(val)=>{
		 dispatch({type:SET_RESULT,payload:val})
	 }
	 const setCalcTheme=(theme)=>{
		 dispatch({type:SET_CALCTHEME,payload:theme})
	 }
	 const setMode=(setmode)=>{
		 dispatch({type:SET_SCIENMODE,payload:setmode});
	 }
	
	
	
	return (<CalculatorContext.Provider value={{
				setTheme,
				theme:state.theme,
					text:state.text,
						setResult,
						setText,
						calctheme:state.calctheme,
							setCalcTheme,
							mode:state.mode,
							setMode
			}}
	>{props.children}
	</CalculatorContext.Provider>)
}
export default CalculatorState;