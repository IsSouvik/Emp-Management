import React from 'react'
import './adminlogin.css'
const AdminLogin = () => {
  return (
    <div id='main-adminlogin'>
      <section id='admin-login'>
     
      <form action="">
      <p id='adminlogin-content'>ADMIN LOGIN</p>
        <label htmlFor="email">Emter Your Email</label><br />
        <input type="email" id='email' required /><br />
        <label htmlFor="password">Enter Your Password</label><br />
        <input type="password" id='password' required/><br />
        <button id='adminlogin-button'>Login</button>
      </form>
      </section>
    </div>
  )
}

export default AdminLogin
