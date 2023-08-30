import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'
const Navbar = () => {
  return (
   <nav id='main-nav'>
    <div>Logo</div>
    <div >
        <ul id='nav-ul'>
        {/* <li className='nav-li'><Link to={'/admindashboard'}>Admin Dashboard</Link></li> */}
         <li className='nav-li'><Link to={'/admin/adminhome'}>Home</Link></li>
         <li className='nav-li'><Link to={'/admin/viewattendence'}>Attendence</Link></li>
         <li className='nav-li'><Link to={'/admin/viewmessage'}>Message</Link></li>
         <li className='nav-li'><Link>Add Project</Link></li>
         {/* <li className='nav-li'><Link>Profile</Link></li> */}
         <li className='nav-li'><Link to={'/admin/addemp'}>Add Employee</Link></li>
        <li className='nav-li'><Link to={"/admin/viewemp"}>View Employee</Link></li>
        <li className='nav-li'><Link to={'/admin/sentmessageproject'}>Sent Message/Project</Link></li>
         <li className='nav-li'><Link>Logout</Link></li>
        </ul>
    </div>
   </nav>
  );
}

export default Navbar;
