import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import "./Router.css"
function Main() {
  return (
    <div>
      
      <nav>
        <ul>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/About'>About</NavLink></li>
            <li><NavLink to='/Services'>Services</NavLink></li>
            <li><NavLink to='/blog'>Blog</NavLink></li>
            <li><NavLink to='/Contant'>Contant</NavLink></li> 
        </ul>
        <Outlet />
      </nav>
      


    </div>
  )
}

export default Main