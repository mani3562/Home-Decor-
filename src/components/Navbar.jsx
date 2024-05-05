import React from 'react';
import "./style.css";
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom'; // If using React Router for navigation

const Navbar = () => {
  return (
    <div>
        <nav className='nav-link1'>
            {/* <h2 id='header'>Home Decor</h2> */}
            <img className='logo-inv' src='./icon/Interior-logo4-free-img.png' alt=''/>
            <ul>
         <li ><Link id='nav-li' to='/'>Home</Link></li>
         <li ><Link id='nav-li' to='/about'>About Us</Link></li>
         <li ><Link id='nav-li' to='/living'>Living Room</Link></li>
         <li ><Link id='nav-li' to='/kitchen'>Kitchen</Link></li>
         <li ><Link id='nav-li' to='/outdoor'>Outdoors</Link></li>
         <li ><Link id='nav-li' to='/contact'>Contacts</Link></li>
        </ul>

        </nav>
    </div>
  );
};

export default Navbar;