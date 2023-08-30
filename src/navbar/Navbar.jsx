import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'
const Navbar = () => {
  return (
   <nav id='main-nav'>
    <div>Logo</div>
    <div >
        <ul id='nav-ul'>
        <li className='nav-li'><Link to={'/admindashboard'}>Admin Dashboard</Link></li>
         <li className='nav-li'><Link>Home</Link></li>
         <li className='nav-li'><Link>Attendence</Link></li>
         <li className='nav-li'><Link>Message</Link></li>
         <li className='nav-li'><Link>Profile</Link></li>
         <li className='nav-li'><Link>Logout</Link></li>
        </ul>
    </div>
   </nav>
  );
}

export default Navbar;
