import React from 'react'

function Header() {

     window.onscroll=()=>{
    (window.scrollY>100)?"head" :" "
     }


  return (
    <div className='header'>
        <img src='./netflix/netflix.png'></img>
        <img src='./netflix/netflixlogo.png'></img>
    </div>
  )
}

export default Header