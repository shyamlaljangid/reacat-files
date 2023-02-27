import React from 'react'
import { BrowserRouter, Routes ,Route } from 'react-router-dom'
import About from './About'
import Contact from './Contact'
import Cart from './Cart'
import Soppingcart from './Soppingcart'
import Home from './Home'

function Shoppingroute() {
  return (
    <div>
      <BrowserRouter >
        <Routes >
        <Route  path='/' element={<Home />} >
                <Route path='/' element={<Soppingcart />}></Route>
                <Route path='/About' element={<About />}></Route>
                <Route path='/Contact' element={<Contact />}></Route>
                <Route path='/Cart' element={<Cart />}></Route>
        
        </Route>
       



        </Routes>
      
      </BrowserRouter>



    </div>
  )
}

export default Shoppingroute