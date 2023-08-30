import React from 'react'
import './userlogin.css'
const UserLogin = () => {
  return (
    <div id='main-userlogin'>
    <section id='user-login'>
   
    <form action="">
    <p id='userlogin-content'>EMPLOYEE LOGIN</p>
      <label htmlFor="email">Emter Your Email</label><br />
      <input type="email" id='email' required /><br />
      <label htmlFor="password">Enter Your Password</label><br />
      <input type="password" id='password' required/><br />
      <button id='userlogin-button'>Login</button>
    </form>
    </section>
  </div>
  )
}

export default UserLogin
