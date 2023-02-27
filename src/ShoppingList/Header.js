import React, { useContext } from 'react'
import { Link, Outlet } from 'react-router-dom'
import ContextApi from './ContextAPI'
// import { BrowserRouter } from 'react-router-dom'

function Header() {

    const{pro} = useContext(ContextApi)
  return (
    <div>
        
        <header>
         <h2>Ecommerce</h2>

         <ul>
            <li><Link to='/'>Home</Link> </li>
            <li><Link to='/about'>About</Link> </li>
            <li><Link to='/contact'>Contact</Link></li>
            <li><Link to='/cart'>Cart :<span>{pro.length}</span></Link> </li>
         </ul>
         </header>
    <Outlet />
    </div>
  )
}

export default Header