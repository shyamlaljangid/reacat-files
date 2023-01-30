import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Main() {
  return (
    <div>
      
      <nav>
        <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/About'>About</Link></li>
            <li><Link to='/Services'>Services</Link></li>
            <li><Link to='/blog'>Blog</Link></li>
            <li><Link to='/Contant'>Contant</Link></li>
            <li><Link to='/notfound'>NotFound</Link></li>

            <Outlet />
        </ul>
      </nav>
      


    </div>
  )
}

export default Main