import React from 'react'
import { BrowserRouter, Routes ,Route, Link } from 'react-router-dom'
import Main from './Main'
import About from './About'
import Services from './Services'
import Blog from './Blog'
import Contant from './Contant'
import BlogServices from './BlogServices'

function App() {
  return (
<>
    <BrowserRouter >
    
       <Routes>
        <Route path='/' element={<Main />}>
        <Route path='/About' element={<About />}></Route>
        <Route path='/Services' element={<Services />}></Route>
        <Route path='/Blog' element={<Blog />}></Route>
        <Route path='/Blog/:id' element={<BlogServices />}></Route>
        <Route path='/Contant' element={<Contant />}></Route>
        </Route>
       
      
        
       </Routes>
     
       </BrowserRouter>
    </>

  )
}

export default App