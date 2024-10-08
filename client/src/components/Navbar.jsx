import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
export default function Navbar() {
  return (
    <div className="navbar">
      <div className="head">

      <Link to="/" className="link1">
        Home
      </Link>
      <Link to="/About" className="link2">
        About
      </Link>
      <Link to="/Experience" className="link4">
        Skills
      </Link>
      <Link to="/Contacts" className="link5">
        Contacts
      </Link>
    </div>
    <hr className='topline'/>
    </div>
  );
}