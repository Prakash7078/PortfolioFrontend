import { createContext, useReducer } from "react";

export const  Store=createContext();
const initialState={
    msgInfo:localStorage.getItem('msgInfo')?JSON.parse(localStorage.getItem('msgInfo')):null,
    memoryInfo:localStorage.getItem('memoryInfo')?JSON.parse(localStorage.getItem('memoryInfo')):null,
    
};
function reducer(state,action){
    switch(action.type){
        case 'SEND_MSG':{
            return {...state,msgInfo:action.payload};
        }
        case 'MEMORY_MSG':{
            return {...state,memoryInfo:action.payload};
        }
        default:
            return state;
    }
}
export function StoreProvider(props){
    const[state,dispatch]=useReducer(reducer,initialState);
    const value={state,dispatch};
    return <Store.Provider value={value}>{props.children}</Store.Provider>
}