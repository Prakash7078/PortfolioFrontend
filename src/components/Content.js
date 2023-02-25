import axios from 'axios';
import React from 'react'
import Footer from './Footer';
import Navbar from './Navbar';
function Content() {
  return (
    <div className="container">
      <Navbar/>
        <div className='container1'>
            <div className="intro">
                <h1>HELLO</h1>
                <h1>I'm Chandra Prakash Babu</h1>
                <p>Iam a student, I want to become a Softeware developer.</p>
                
            </div>
            <a href="https://drive.google.com/file/d/1wA1gQOrLBpY0pC6NW9XYjW6q7UmKQ4Ee/view?usp=sharing" target="_blank"className='start' download={true}>Resume</a>
        </div>
        <div className="container2">
            <h2 id='about'>ABOUT</h2>
            <p>Hii everyone.Iam Prakash, persuing my btech on the stream of CSE.<br/>Looking for a challenging role in a reputable organization to utilize my<br/>technical, database, and management skills for the growth of the <br/>organization as well as to enhance my knowledge about new and <br/>emerging trends in the IT sector.</p>
        </div>
        <Footer/>
    </div>
    
  )
}

export default Content