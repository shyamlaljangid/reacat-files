import React, { useContext } from 'react'
import { Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom'
import ShoppingContext from './ShoppingContext'


function Home() {

    const {pro} = useContext(ShoppingContext)

  return (<>
    <header>
    <h1>shopping</h1>
     <ul>
        <li><Link to ="">Home</Link></li>
        <li><Link to ="/About" >About</Link></li>
        <li><Link to ="/Contact" >Contact</Link></li>
        <li><Link to ="/Cart" >Cart : <span>{pro?.length}</span></Link></li>
     </ul>
    
    </header>
    <Outlet />
    
  
  </>
  )
}

export default Home