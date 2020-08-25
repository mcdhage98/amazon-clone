import React from 'react'

export const initialState={
basket:["Apple","choc"]
}

const reducer=(state=initialState,action)=> {
	switch(action.type){
		case 'ADD_TO_BASKET':
			return {...state};
		case 'REMOVE_FROM_BASKET':
			return {state};
		default: return state;
	}
	
}

export default reducer


