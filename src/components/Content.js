import axios from 'axios';
import React from 'react'
import Footer from './Footer';
import Navbar from './Navbar';
import { Typewriter } from 'react-simple-typewriter'
function Content() {
  return (
    <div className="container">
      <Navbar/>
        <div className='container1'>
            <div className="intro">
                <h1>HELLO</h1>
                <span style={{ color: 'rgb(179, 161, 161)', fontSize: '35px' }}>
                  {/* Style will be inherited from the parent element */}
                  I am&nbsp;
                  <Typewriter
                    words={['Chandra🌛', 'Prakash🌄','Babu🙋‍♂️','Chandra Prakash Babu']}
                    loop={1}
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                  />
                </span>
                
               
            </div>
            <a href="https://drive.google.com/file/d/1wA1gQOrLBpY0pC6NW9XYjW6q7UmKQ4Ee/view?usp=sharing" target="_blank"className='start' download={true}>Resume</a>
        </div>
        <div className="container2">
                <span id="about"style={{ color: 'rgb(179, 161, 161)', fontSize: '30px' }}>
                  {/* Style will be inherited from the parent element */}
                  I am&nbsp;a&nbsp;
                  <Typewriter
                    words={['Student','Web Developer','Software Developer']}
                    loop={5}
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                  />
                </span>
            <p>Hii everyone.Iam Prakash, pursuing my btech on the stream of CSE.<br/>Looking for a challenging role in a reputable organization to utilize my<br/>technical, database, and management skills for the growth of the <br/>organization as well as to enhance my knowledge about new and <br/>emerging trends in the IT sector.</p>
        </div>
        <Footer/>
    </div>
    
  )
}

export default Content