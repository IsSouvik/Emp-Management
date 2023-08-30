import React from 'react'
import './addemp.css'
const AddEmp = () => {
  return (
    <div id='main-addemp'>
      
      <section id='addemp'>
     
      <form action="">
      <p id='addemp-content'>ADD EMPLOYEE</p>
      <label htmlFor="name">Enter Name</label><br />
        <input type="text" id='name' /><br />
        <label htmlFor="email">Enter Email</label><br />
        <input type="email" id='email' /><br />
        <label htmlFor="phone">Enter Phone NO</label><br />
        <input type="tel" id='phone' /><br /><br />
        <label htmlFor="domain">Choose Domain</label>
        <select name="domain" id="domain">
        <option value="not select">Select</option>
       <option value="project manager">Project Manager</option>
        <option value="senior developer">Senior Developer</option>
        <option value="junior developer">Junior Developer</option>
        <option value="fresher">Frsher Developer</option>
        <option value="senior test enginner">Senior Test Enginner</option>
        <option value="junior test enginner">Junior Test Enginner</option>
        <option value="fresher test enginner ">Frsher Test Enginner</option>
        </select><br /><br />
        <label htmlFor="password">Create Password</label><br />
        <input type="password" id='password' /><br />
      
      
        <button id='addemp-button'>ADD</button>
      </form>
      </section>
    
    </div>
  )
}

export default AddEmp
