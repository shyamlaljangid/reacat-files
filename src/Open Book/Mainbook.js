import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Mainbook() {
  return (
    <div>

        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/About">About</Link></li>
                <li><Link to="/Books">Books</Link></li>
              
            </ul>
            <Outlet />
        </nav>
    </div>
  )
}

export default Mainbook