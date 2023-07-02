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
import svg from '../Images/svg.webp'
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
        <div className='foot-row1'>
            <img className='svg' src={svg} alt='svg'/>
            <div className="symbols">
                <Link to="https://github.com/Prakash7078" target="_blank"><img width="20px" height="20px"src={github}/></Link>
                <Link to="https://www.linkedin.com/feed/" target="_blank"><img width="20px" height="20px"src={linkedin}/></Link>
                <Link to="https://www.instagram.com/prakash_chowdary_ponduri/?next=%2F" target="_blank"><img width="20px" height="20px"src={insta}/></Link>
            </div>
        </div>
        <form ref={form} className='forms'>
            <div className='row1'>
                <h2 >CONTACT ME 💬</h2>
                <p>If you'd like to get in touch with me, feel free to reach out using the contact information below or by filling out the contact form.</p>
            </div>
            <div className='row2'>
                <div className='row-col'>
                    <label>EMAIL</label>
                    <input type='text' value='ponduriprakash7078@gmail.com' disabled/>
                </div>
                <div className='row-col'>
                    <label>PHONE</label>
                    <input type='tel' value='+91 9398867753' disabled/>
                </div>
            </div>
            <div className='row3'>
                <div className='row-col'>
                    <label>Name</label>
                    <input type="text" name="form_name" onChange={(e)=>{setName(e.target.value)}}></input>
                </div>
                <div className='row-col'>
                    <label>Mobile</label>
                    <input type="tel" name="form_tel" onChange={(e)=>{setPhone(e.target.value)}}></input>
                </div>
            </div>
           <div className='row4'>
                <label>Email</label>
                <input type="email"name="form_email"  onChange={(e)=>{setEmail(e.target.value)}}></input>
           </div>
            <div className='row5'>
                <label>Message</label>
                <textarea rows="5" cols="70"placeholder='Message me...'  onChange={(e)=>{setText(e.target.value)}}></textarea> &nbsp;
            </div>
            <div className='row6'><button id="text"onClick={msgHandler}>Send Message</button></div>
        </form>
        <p className='last'>Made with 🤍 by <Link to='https://www.linkedin.com/feed/'>Ponduri Chandra Prakash Babu</Link></p>
    </div>
  )
}
export default Footer;
