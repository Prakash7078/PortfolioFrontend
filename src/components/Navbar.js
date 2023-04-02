import React from 'react'
import { Link } from 'react-router-dom';
import '../App.css';
import p from "../Images/letter-p.png"
import nav from '../Images/nav2.jpg';
import { HashLink } from 'react-router-hash-link';
function Navbar() {
  return (
    <div className='nav'>
      <div className="dropdown">
        <div className="navs">
        <Link to="/" className='aside1' id='home'><img width="50px" height="40px"src={nav}></img></Link>
        <Link to="/" className='aside' id='home'><img width="50px" height="40px"src={p}></img></Link>
        </div>
        <div id="dropdown-content">
          <Link to='/education'>Education</Link>
          <Link to='/projects'>Projects</Link>
          <Link to='/internships'>Internships</Link>
          <Link to='/hobbies'>Hobbies</Link>
          <Link to='/certificates'>Certificates</Link>
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