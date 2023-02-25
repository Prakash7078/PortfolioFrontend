import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import linkedin from '../Images/linkedin.png'
import github from '../Images/github.png'
import cart from '../Images/shopping-cart.png'
import insta from '../Images/insta.png'
import what from '../Images/send.png'
import {getError} from '../utils.js'
import { toast } from 'react-toastify'
import axios from 'axios'

import { Store } from '../Store'
import { HashLink } from 'react-router-hash-link'

function Footer() {
    const navigate=useNavigate();
    const [name,setName]=useState('');
    const[phone,setPhone]=useState();
    const[email,setEmail]=useState('');
    const[text,setText]=useState('');
    const{state,dispatch:ctxDispatch}=useContext(Store);
    const{msgInfo}=state;
    const msgHandler=async()=>{
        try{
            const data=await axios.post('https://myportfolio-ci32.onrender.com/api/msgs/send',{
                name,
                phone,
                email,
                text,
            });
            ctxDispatch({type:'SEND_MSG',payload:data});
            localStorage.setItem('msgInfo',JSON.stringify(data));
            navigate("/contact");
        }catch(err){
            toast.error(getError(err));
        }
    }
    useEffect(()=>{
        msgHandler();
    },[msgInfo]);      

   
  return (
    <div className='foot'>
        <div className="col1">
            <div className="symbols">
                <Link to="https://github.com/Prakash7078" target="_blank"><img width="30px" height="30px"src={github}/></Link>
                <Link to="https://www.linkedin.com/feed/" target="_blank"><img width="30px" height="30px"src={linkedin}/></Link>
                <Link to="https://mern-ecommerce-a2si.onrender.com/" target="_blank"><img width="30px" height="30px"src={cart}/></Link>
                <Link to="https://www.instagram.com/prakash_chowdary_ponduri/?next=%2F" target="_blank"><img width="30px" height="30px"src={insta}/></Link>
            </div>
            <div className="foot-content">
                <HashLink to="#home">Home</HashLink>
                <Link to="/contact">Address</Link>
                <HashLink to="">Services</HashLink>
            </div>
        </div>
        <form className='forms'>
            <h1 id='text'>SEND US A MESSAGE</h1>
            <label>Your Name</label><br/><br/>
            <input type="text" placeholder='Enter your name' onChange={(e)=>{setName(e.target.value)}}></input><br/><br/>
            <label>Phone No</label><br/><br/>
            <input type="tel" placeholder='Mobile No' onChange={(e)=>{setPhone(e.target.value)}}></input><br/><br/>
            <label>Email</label><br/><br/>
            <input type="email" placeholder='Enter email' onChange={(e)=>{setEmail(e.target.value)}}></input><br/><br/>
                
        </form>
        <div className="col2">
            <h1 >Your Message</h1>
            <textarea rows="5" cols="30"placeholder='Message me...'  onChange={(e)=>{setText(e.target.value)}}></textarea> 
            <button onClick={msgHandler}><img src={what} width="35px" height="35px" /></button>
        </div>
        
    </div>
  )
}

export default Footer