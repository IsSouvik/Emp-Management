import React from 'react'
import Adminsidebar from './Adminsidebar'
import Adminmainbar from './Adminmainbar'
import './admindashboard.css'
const AdminDashboard = () => {
  return (
    <div id='admindashboard-main'>
     <section id='admindashboard-section1'><Adminsidebar/></section>
     <section id='admindashboard-section2'><Adminmainbar/></section>
    </div>
  )
}

export default AdminDashboard
