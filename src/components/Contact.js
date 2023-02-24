import React from 'react'
import { HashLink } from 'react-router-hash-link'
import Navbar from './Navbar'

function Contact() {
  return (
    <div className='container-contact'>
        <Navbar/>
        <div className="details">
        <HashLink to='/#text'>Msg Me</HashLink>
        </div>
        <div id="contact">
            <h1 id='num'>9398867753</h1>
        </div>


    </div>
  )
}

export default Contact