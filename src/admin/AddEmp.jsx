import React from 'react'
import './addemp.css'
const AddEmp = () => {
  return (
    <div>
       <div id='main-addemp'>
      <section id='addemp'>
     
      <form action="">
      <p id='addemp-content'>ADD EMPLOYEE</p>
      <label htmlFor="name">Enter Name</label><br />
        <input type="text" id='name' /><br />
        <label htmlFor="email">Enter Email</label><br />
        <input type="email" id='email' /><br />
        <label htmlFor="phone">Enter Phone NO</label><br />
        <input type="tel" id='phone' /><br />
        <label htmlFor="domain">Choose Domain</label>
        <select name="domain" id="domain">
        <option value="not select">Select</option>
       <option value="team leader">Team Leader</option>
        <option value="senior developer">Senior Developer</option>
        <option value="junior developer">Junior Developer</option>
        
        </select>
        <button id='addemp-button'>ADD</button>
      </form>
      </section>
    </div>
    </div>
  )
}

export default AddEmp
