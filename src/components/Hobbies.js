import React, { useEffect, useReducer, useState } from 'react'
import logger from 'use-reducer-logger'
import axios from 'axios';
import HobiesDisplay from './HobiesDisplay';
import Navbar from './Navbar';
const reducer=(state,action)=>{
    switch(action.type){
        case 'FETCH_REQUEST':
            return{
                ...state,
                loading:true,
            };
        case 'FETCH_HOBIES':
            return{
                ...state,
                hobies:action.payload,
                loading:false,
            };
        case 'FETCH_OTHERS':
            return{
                ...state,
                others:action.payload,
                loading:false,
            };
        case 'FETCH_FAIL':
            return{
                ...state,
                loading:false,
                error:action.payload,
            };
        default:
            return state;
    }
};
function Hobbies() {
    const[{loading,others,hobies,error},dispatch]=useReducer(logger(reducer),{
        hobies:[],
        others:[],
        loading:false,
        error:'',
    });
    const[click,setClick]=useState(true);
    const[click1,setClick1]=useState(false);
    useEffect(()=>{
        const fetchData=async()=>{
            dispatch({type:'FETCH_REQUEST'});
            try{
                const result=await axios.get('https://myportfolio-ci32.onrender.com/api/products/hobies');
                dispatch({type:'FETCH_HOBIES',payload:result.data});
                const result1=await axios.get('https://myportfolio-ci32.onrender.com/api/products/others');
                dispatch({type:'FETCH_OTHERS',payload:result1.data});

            }catch(err){
                dispatch({type:'FETCH_FAIL',payload:err.message});
            }
        };
        fetchData();
    },[]);
  return (
    <div className='hobby'>
        <div className="hobby-nav">
        <Navbar/>
        </div>
        <div className="hobby-opt">
            <button onClick={()=>{setClick(true);setClick1(false)}}>Travelling</button>
            <button onClick={()=>{setClick1(true);setClick(false)}}>Others</button>
        </div>
        <div className="products">
            {
                loading?(
                    <div><h3>LOADING...</h3></div>
                ):error?(
                    <div><h3>{error}</h3></div>
                ):(
                    click && hobies.map((product1)=>{
                        return(
                            <HobiesDisplay product={product1}/>
                        )
                    })||
                    click1 && others.map((product)=>{
                        return(
                            <HobiesDisplay product={product}/>
                        )
                    })
                )
            }
        </div>
    </div>
  )
}

export default Hobbies