import React from 'react'
import { Outlet } from 'react-router-dom'

const Adminmainbar = () => {
  return (
    <div>
      <marquee behavior="" direction="">Welcome to Admin Dashboard</marquee>
      <Outlet/>
    </div>
  )
}

export default Adminmainbar
