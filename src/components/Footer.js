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
import { HashLink } from 'react-router-hash-link'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'

function Footer() {
    const form = useRef();
    const navigate=useNavigate();
    const [name,setName]=useState('');
    const[phone,setPhone]=useState();
    const[email,setEmail]=useState('');
    const[text,setText]=useState('');
    const msgHandler=async(e)=>{
        e.preventDefault();  
        emailjs.sendForm('service_60deouj', 'template_fh1hh3e', form.current, 'SEYplcctvMg-dG9Uk')
        .then((result) => {
            console.log(result.text);
        },(error) => {
            console.log(error.text);
        });
        try{
            const data=await axios.post('https://myportfolio-ci32.onrender.com/api/msgs/send',{
                name,
                phone,
                email,
                text,
            });
            navigate("/contact");
        }catch(err){
            toast.error(getError(err));
        }
    }
    useEffect(()=>{
        msgHandler();
    },[]);      

   
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
        <form ref={form} className='forms'>
            <h2 >SEND A MESSAGE 💬</h2>
            <label>Your Name</label>
            <input type="text" name="form_name"placeholder='Enter your name' onChange={(e)=>{setName(e.target.value)}}></input><br/>
            <label>Phone No</label>
            <input type="tel" name="form_tel"placeholder='Mobile No' onChange={(e)=>{setPhone(e.target.value)}}></input><br/>
            <label>Email</label>
            <input type="email"name="form_email" placeholder='Enter email' onChange={(e)=>{setEmail(e.target.value)}}></input><br/><br/>
            <label>Message</label>
            <textarea rows="5" cols="30"placeholder='Message me...'  onChange={(e)=>{setText(e.target.value)}}></textarea> &nbsp;
            <button onClick={msgHandler}><img src={what} width="35px" height="35px" /></button>
        </form>
    </div>
  )
}
export default Footer;
