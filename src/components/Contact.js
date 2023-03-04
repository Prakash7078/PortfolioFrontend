import React, { useContext, useEffect, useReducer, useState } from 'react'
import { HashLink } from 'react-router-hash-link'
import Navbar from './Navbar'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import CommentDisplay from './CommentDisplay';
import logger from 'use-reducer-logger';
const reducer=(state,action)=>{
  switch(action.type){
      case 'FETCH_REQUEST':
          return{
              ...state,
              loading:true,
          };
      case 'FETCH_MSGS':
          return{
              ...state,
              msgs:action.payload,
              loading:false,
          };
      case 'FETCH_COMMENTS':
          return{
              ...state,
              comments:action.payload,
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
function Contact() {
  const[{loading,msgs,comments,error},dispatch]=useReducer(logger(reducer),{
    comments:[],
    msgs:[],
    loading:false,
    error:'',
  });
  const[click,setClick]=useState(true);
  const[show,setShow]=useState(false);
  const[name,setName]=useState("");
  const[des,setDes]=useState("");
  const navigate=useNavigate();
  const userMsg=()=>{
    let userId=prompt("enter the userID");
    if(userId=="chandra143"){
      setShow(true);
      setClick(false);
    }else{
      prompt("You don't have access for this data");
    }
  }
  useEffect(()=>{
    const fetchData=async()=>{
        dispatch({type:'FETCH_REQUEST'});
        try{
            const result=await axios.get('https://myportfolio-ci32.onrender.com/api/msgs/msg');
            dispatch({type:'FETCH_MSGS',payload:result.data});
            const result1=await axios.get('https://myportfolio-ci32.onrender.com/api/memories/comments');
            dispatch({type:'FETCH_COMMENTS',payload:result1.data});

        }catch(err){
            dispatch({type:'FETCH_FAIL',payload:err.message});
        }
    };
    fetchData();
  },[]);
  const submitHandler=async(e)=>{
    e.preventDefault();
    try{
      await axios.post('https://myportfolio-ci32.onrender.com/api/memories/memory',{
        name,
        des,
      });
      navigate('/');
    }catch(err){
      console.log(err);
    };
    
  };
 
  useEffect(()=>{
    submitHandler();
  },[comments]);
  return (
    <div className='contact'>
        <div className="contact-nav">
          <Navbar/>
        </div>
        <div className="container-contact1">
            <div className="hobby-opt">
              <button onClick={()=>{setClick(true);setShow(false)}}>Comments</button>
              <button onClick={userMsg}>Messages</button>
            </div>
          <div className="main-contact">
            <div className="contact-details">
              {
                loading?(
                  <div><h3>LOADING...</h3></div>
                ):error?(
                  <div><h3>{error}</h3></div>
                ):(
                    click && <div className="comments">
                      {comments.map((comment)=>{
                      return<CommentDisplay comment={comment}/>
                    })}
                    </div> || show &&
                        msgs.map((msg)=>{
                          return(
                            <table className='msgsdata'>
                              <tr key={msg._id}>
                                  <td>{msg.name}</td>
                                  <td>{msg.phone}</td>
                                  <td>{msg.email}</td>
                                  <td>{msg.text}</td>
                                </tr>
                            </table>
                          );
                        })
                )
              }
            </div>
            <div className="form-group">
              <form onSubmit={submitHandler}>
                <h1>About Me</h1>
                <label>Your Name</label>
                <input type="text" onChange={(e)=>{setName(e.target.value)}}/><br/>
                <label>About Me</label>
                <textarea cols={15} rows={5} onChange={(e)=>{setDes(e.target.value)}}></textarea><br/>
                <input type="submit" className='submit'/>
              </form>
            </div>
          </div>
        </div>
      </div>
  )
};

export default Contact;