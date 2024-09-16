import React from 'react';
import './home.css'

function Home() {

  return (
    <div className='homeContainer'>
      
        
        <img src='imgmyself.jpg' alt='' className='homeprofile' />
        <h1>Welcome to my website</h1>

        <p style={{ fontSize: '20px', lineHeight: 1.5, marginBottom: '20px' }}>
           I am Arockiaraj and  my role is Quality Analyst. 
        </p>
        <h1 className='quote'>Believe in yourself </h1>
    </div>
  );
}
export default Home;