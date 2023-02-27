
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Mainbook from './Mainbook'
import About from './About'
import Books from './Books'
import BookLayout from './BookLayout'
import Single from './Single'

function BookRouter() {
  return (
    <div>

      <BrowserRouter >
        <Routes>
          <Route path='/' element={<Mainbook />}>
            <Route path='/About' element={<About />}></Route>
            <Route path='/Books' element={<BookLayout />}>
              <Route index element={<Books />}></Route>
              <Route path=':id' element={<Single />}></Route>
            </Route>

          </Route>



        </Routes>


      </BrowserRouter>




    </div>
  )
}

export default BookRouter
