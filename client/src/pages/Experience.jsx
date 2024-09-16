import React  from 'react';
import './experience.css';

function Experience() {

    return (
      <div className='skillcontainer'>
        <div className='cont1'>
        <div className='skilldiv'>
          <img src='nodejs-logo.jpg' alt='' classname='Node'/>
          <div className='statusbar1'></div>
          <h2 className='nodejs'>NodeJs</h2>
        </div>
        <div className='skilldiv'>
          <img src='logo192.png' alt='' className='react'/>
          <div className='statusbar2'></div>
          <h2 className='language'>ReactJs</h2>

        </div>
        <div className='skilldiv'>
          <img src='jsimg.png' alt='' className='js'/>
          <div className='statusbar3'></div>

          <h2 className='script'>Javascript</h2>

        </div>
        <div className='skilldiv'>
          <img src='html5.jpg' alt='' className='html'/>
          <div className='statusbar4'></div>

          <h2 className='Html'>Html</h2>
        </div>
        </div>
        <div className='cont2'>
        <div className='skilldiv'>
          <img src='css.jpg' alt='' className='css'/>
          
          <div className='statusbar5'></div>

          <h2 className='cascade'>CSS</h2>
        </div>
        <div className='skilldiv'>
          <img src='selenium.png' alt='' className='sel'/>
          <div className='statusbar6'></div>

          <h2 className='selenium'>Selenium</h2>
        </div>
        <div className='skilldiv'>
          <img src='figma-icon.png' alt='' className='figma'/>
          <div className='statusbar7'></div>

          <h2 className='fig'>Figma</h2>
        </div>
        <div className='skilldiv'>
          <h2>Keep ourself up to date in day to day life.</h2>
        </div>
        </div>
      </div>
    );
  }
  export default Experience;