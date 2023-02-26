import React from 'react'
import { HashLink } from 'react-router-hash-link'
import Navbar from './Navbar'

function Contact() {
  const msgInfo=localStorage.getItem("msgInfo");
  const data1=JSON.parse(msgInfo);
  const {data}=data1;

  return (
    <div className='container-contact'>
        <div className="contact-nav">
          <Navbar/>
        </div>
        <div className="main-contact">
          <div className="details">
          <HashLink to='/#text'>Msg Me</HashLink>
          </div>
          <div className="recent">
            <a className='usermsg'>Recent</a>
            <div className="recentmsg">
              <label>{data.name}</label><br/><br/>
              <label>{data.email}</label><br/>
              <label>{data.text}</label><br/><br/>
            </div>
          </div>
        </div>
    </div>
    
  )
}

export default Contact