import React,{useContext} from 'react'
import reducer,{initialState} from './Reducer'

export const Context = React.createContext();

export const Store = props => {
	const [globalState, dispatch] = React.useReducer(reducer, initialState);
	return (
	  <Context.Provider value={{ globalState, dispatch }}>
		{props.children}
	  </Context.Provider>
	);};

	export const useStateValue = () => useContext(Context);
	// const { globalState, dispatch } = React.useContext(Context);