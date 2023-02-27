import React from 'react'
import { useState } from 'react'
function Header() {
let [border,setborderblack]=useState('')
  
    window.onscroll(()=>{
        setborderblack((window.scrollY>200)?'dark':'')
      }
    )
  
   


  return (
    <div className={border}>
    <div className='header'>
        <img src='./netflix/netflix.png'></img>
        <img src='./netflix/netflixlogo.png'></img>
    </div>
    </div>
  )
}

export default Header