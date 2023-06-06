import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'

function Projects() {
  return (
    <div className='project'>
      <div className="project-nav">
        <Navbar/>
      </div>
      <div className="project-content">
        <div className="project1">
          <h2>Whatsup, Email operations using the OAUTH 2.0</h2>
          <p>Python</p>
          <p>Using the python libraries webdriver, google oauth 2.0, pywhatkit, alexa. It is integration of several modules 1..SEND EMAIL 2. SEARCH EMAIL 3. GET EMAIL 4. SEND WHATSAPP MSGS TIME 5. SEND MULTIPLE MSGS 6.PLAY VIDEO.</p>
          <Link to="https://github.com/Prakash7078/Python-Project" target="_blank">code</Link>
        </div>
        <div className="project1">
          <h2>Ecommerce website</h2>
          <p>MERN</p>
          <p>Ecommerce website using the MERN stack. We can choose items and add to cart.After that order shipping,payment,placeorder.</p>
          <Link to="https://mern-ecommerce-a2si.onrender.com/" target="_blank">Ecommerce</Link>
          <Link to="https://github.com/Prakash7078/ecommerce" target="_blank">code</Link>
        </div>
        <div className="project1">
          <h2>Portfolio</h2>
          <p>MERN</p>
          <p>My Portfolio using the MERN stack. Here all professional details and my hobbies you can see, and also you can post your questions in that website.You can text me also.</p>
          <Link to="https://chandra-prakash.netlify.app/" target="_blank">Portfolio</Link>
          <Link to="https://github.com/Prakash7078/PortfolioFrontend" target="_blank">code</Link>
        </div>
        <div className="project1">
          <h2>Amigos</h2>
          <p>MERN</p>
          <p>The Amigos website is used to post the memories of yours with your friends. We can add likes to the posts and update the posts. Users can delete the posts also.</p>
          <Link to="https://amigos-j7xz.onrender.com/" target="_blank">Amigos</Link>
          <Link to="https://github.com/Prakash7078/AmigosFrontend" target="_blank">code</Link>
        </div>
        <div className="project1">
          <h2>FlappyBird Game</h2>
          <p>Unity</p>
          <p>The Flappy Bird game is designed with help of unity game engine.</p>
          <Link to="https://github.com/Prakash7078/Unity-FlappyBird" target="_blank">code</Link>
        </div>
      </div>
    </div>
  )
}

export default Projects