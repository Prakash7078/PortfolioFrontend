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
      <div className="intern-content">
        <div className="content1">
          <h1>Virtual Internship</h1>
          <p>AICTE-Eduskills AI-ML Virtual Internship</p>
          <p>December 2022 - February 2023</p>
          <Link to="https://drive.google.com/file/d/1H6WR-TnI3xrVWnQgrml2YPO5Ct_BccEX/view?usp=sharing" target="_blank"download={true}>Certificate</Link>
        </div>
      </div>
   
    </div>
  )
}

export default Internships