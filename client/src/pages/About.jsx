import React  from 'react';
import './about.css';
function About() {

  
    return (
      <div className='aboutContainer'>
        <h2 className='title'>My profile</h2>
        <div className='QAsection'>
        <img src='myphoto.jpg' alt='none' className='photo'/>
        <div className='curved-space'>
        </div>
        <img src='aIcon.png' alt='none' className='Aletter' />

        <h2 className='name'>Name:</h2>
        <h2 className='myself'>Arockiaraj</h2>
        <h2 className='role'>Designation:</h2>
        <h2 className='value'>Quality Analyst</h2>
        <h2 className='edu'>Education:</h2>
        <h2 className='degree'>B.Sc.Information Technology</h2>
        <h2 className='tg'>Training:</h2>
        <h2 className='org'>Web app development Training through Kaavian systems</h2>
        </div>
        <h2>About me</h2>
        <h2>
          <ul>
          <li>Developed Test cases and Test data.</li>
	      <li>Hands on experience in Database Testing.</li>
	      <li>Involved in Functional, Integration, System, Regression and unit Testing.</li>
	      <li>Ability to achieve successful outcomes through collaborative and cooperative means.</li>
	      <li>Shared Knowledge with other members of the team.</li>
	      <li>Self motivation, enthusiasm, flexibility drive and a person of CAN DO attitude.</li>
        <li>Experience in Mobile  Application  and Web Application.</li>

          </ul>
        

 
        </h2>
        
      </div>
    );
  }
  export default About;