import React  from 'react';
import './contacts.css';

function Contacts() {
    return (
      <div className='mainContainer'>
        <div className='locContainer'>
        <img src='location.png' alt='' className='locicon'/>
        <h2>Home Address</h2>
        <p>242, Sivanthipuram Aathumedu, virudhunagar-626001</p>
        <h2>Office Address</h2>

        <p>Kaavian Systems, 353, Pullalakottai road,virudhunagar-626001</p>
        </div>
        <div className='phoneContainer'>
        <img src='phone.png' alt='' className='phone' />
        <h2>Mobile number</h2>
        <p>8072666380</p>
        <h2>Whatsapp number</h2>
        <p>8903371557</p>
        </div>
        <div className='emailContainer'>
        <img src='email.png' alt='' className='email'  />
        <h2>Personal mail Id</h2>
        <p>arockiarajsunt014@gmail.com</p>
        <h2>Official mail Id</h2>
        <p>arockiaraj.j@kaaviansys.com</p>
        </div>
      </div>
    );
  }
  export default Contacts;