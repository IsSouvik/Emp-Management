import React from 'react'
import { Link } from 'react-router-dom'
import './adminsidebar.css'
const Adminsidebar = () => {
  return (
    <div id='adminsidebar-main'>
        {/* <h1>Option</h1> */}
      <ul id='adminsidebar-ul'>
        <li><Link to={'/admindashboard/addemp'}>Add Employee</Link></li>
        <li><Link>View Employee</Link></li>
        <li><Link to={'/admindashboard/sentmessageproject'}>Sent Message/Project</Link></li>
      </ul>
    </div>
  )
}

export default Adminsidebar
