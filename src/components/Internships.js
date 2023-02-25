import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'

function Internships() {
  return (
    <div className='intern'>
      <div className="intern-nav">
        <Navbar/>
      </div>
      <div className="intern-content">
        <div className="content1">
          <h1>Internship</h1>
          <p>Dynamatix Analytics Private Limited</p>
          <p> 813 Manjeera Trinity Corporate, Kukatpally, Hyderabad 500072</p>
          <Link to="https://drive.google.com/file/d/1OgAAj7Chf8w5YR59NH6v7ou0rOYFEvL3/view?usp=sharing" target="_blank"download={true}>OfferLetter</Link>
        </div>
      </div>
   
    </div>
  )
}

export default Internships