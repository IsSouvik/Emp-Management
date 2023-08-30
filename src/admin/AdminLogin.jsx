import React from 'react'
import { useState } from 'react';
import './adminlogin.css'
const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const emailValidation = (e) => {
   
    const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
    if (regEx.test(email)) {
      setMessage("Email is Valid");
     
    } else if (!regEx.test(email) && email !== "") {
      setMessage("Email is Not Valid");
      e.preventDefault()
    } else {
      setMessage("");
    }
  };

  const handleOnChange = (e) => {
    setEmail(e.target.value);
  };
  return (
    
    <div id='main-adminlogin'>
      <section id='admin-login'>
     
      <form action="">
      <p id='adminlogin-content'>ADMIN LOGIN</p>
        {/* <label htmlFor="email">Emter Your Email</label><br /> */}
        <input type="text" id='email' className='input' placeholder='Enter Your Email' value={email} onChange={handleOnChange} required /><br />
        {/* <label htmlFor="password">Enter Your Password</label><br /> */}
        <input type="password" id='password' className='input' placeholder='Enter Password'/><br />
        <button id='adminlogin-button' onClick={emailValidation}>Login</button>
        <p className='message'>{message}</p>
      </form>
      </section>
    </div>
  )
}

export default AdminLogin
