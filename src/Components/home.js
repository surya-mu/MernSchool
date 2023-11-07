import React from 'react'
import './home.css'
import { Link } from 'react-router-dom';





export function Home(){

  return (
    <>
    <div>
      <div className='hero-section'>
          <img loading='lazy' src='./Courses2.jpg' alt=''></img>
          <h1>All Your School Needs at One Place&nbsp;</h1>
          <h2 id="school">The School Official Management Website. </h2>
          <button><Link to='/courses'>Sign in &nbsp;➔</Link></button>
      </div>
    </div>
      <h1 id='next-heading'>FAQ &gt;</h1>
    <div> 
      <div  id='placeholder-div'className='hero-section2'>
            <img  src='./Courses1.jpg' alt=''></img>
            <h1>&gt; Do Staff/Alumni/Students <br></br> have different Profiles? <br></br>
            &gt;Can students access Attendance in Realtime? 
            </h1>
            
        
      </div>
    </div>
    </>


  )
}
