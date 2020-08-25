import React from 'react'

export const initialState={
basket:[]
}

const reducer=(state=initialState,action)=> {
	console.log(action)
	const {item}=action;
	switch(action.type){
		case 'ADD_TO_BASKET':
			console.log("FFFFf")
			return {...state,basket:[...state.basket,item]};
		case 'REMOVE_FROM_BASKET':
			return {state};
		default: return state;
	}
	
}

export default reducer


