import {
	SET_THEME,
	SET_TEXT,
	SET_RESULT,
	SET_CALCTHEME,
	SET_SCIENMODE
	   } from '../types';
export default (state,action)=>{
	switch(action.type){
		case SET_THEME:
			return{
				...state,
				theme:action.payload
			}
		case SET_CALCTHEME:
			return{
				...state,
				calctheme:action.payload
			}
		case SET_SCIENMODE:
			return{
				...state,
				mode:action.payload
			}
		case SET_TEXT:
			const newtext=state.text+=action.payload;
			
			return{
				
				...state,
				text:newtext
				
			}
		case SET_RESULT:
			return{
				...state,
				text:action.payload
			}
		
				
		default:
			return state;
	}
}