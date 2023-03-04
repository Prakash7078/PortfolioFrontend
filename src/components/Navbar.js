import React from 'react'
import { Link } from 'react-router-dom';
import '../App.css';
import p from "../Images/letter-p.png"
import { HashLink } from 'react-router-hash-link';
function Navbar() {
  return (
    <div className='nav'>
      <div className="dropdown">
        <Link to="/" className='aside' id='home'><img width="50px" height="40px"src={p}></img></Link>
        <div id="dropdown-content">
          <Link to='/education'>Education</Link>
          <Link to='/projects'>Projects</Link>
          <Link to='/internships'>Internships</Link>
          <Link to='/hobbies'>Hobbies</Link>
        </div>
      </div>
      <div className="navbas">
        <HashLink to="/#about">About</HashLink>
        <Link to="/contact">Contact</Link>
        <HashLink className='login' to="/#text" >Textme</HashLink>
      </div>

      
    </div>
  )
}

export default Navbar