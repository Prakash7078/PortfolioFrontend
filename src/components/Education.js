import React from 'react'
import { Typewriter } from 'react-simple-typewriter'
import Navbar from './Navbar'
function Education() {
  return (
    <div className='education'>
        <div className="educate-nav">
          <Navbar/>
        </div>
        <div className="educate">
        <span className="edu"style={{ color: ' rgb(133, 255, 182)', fontSize: '30px' }}>
                  {/* Style will be inherited from the parent element */}
                  My&nbsp;
                  <Typewriter
                    words={['Education']}
                    cursor
                    cursorStyle={' >>>'}
                    loop={5}
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                  />
          </span>
          <div className='educate1'>
          
            <h1>Geethanjali High School, Vinukonda</h1>
            <h2>10th</h2>
            <h2>2017-2018</h2>
            <h2>GPA:9.8</h2>
          </div>
          <div className='educate2'>
            <h1>Vignan Co-operative junior college</h1>
            <h2>Intermediate</h2>
            <h2>2018-2020</h2>
            <h2>Marks:949</h2>
            <div className='educate2-1'>
              <h1>Acheivments</h1>
              <p>JEE Mains - 96.34%</p>
              <p>Eamcet Rank - 6950</p>
            </div>
          </div>
          <div className='educate3'>
            <h1>VVIT, Nambur</h1>
            <h2>B-tech</h2>
            <h2>2020-2024</h2>
            <h2>Currently studying</h2>
          </div>
        </div>
        
    </div>
  )
}

export default Education