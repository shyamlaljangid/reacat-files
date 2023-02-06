import React, { useState } from 'react'
import "./Mouse.css"

function Mouse() {
      const[size ,setsize] =useState("")
    
      
     
    function mouse(e){
        //  console.log(e.target.clientWidth)   
        //  console.log(e.target.clientHeight)   
     console.log(e)
        let width =  e.nativeEvent.offsetX
        let height = e.nativeEvent.offsetY
        // let x= Math.random()*(width)
        // let y = Math.random()*(height)

     setsize( width + " * " + height )
    
    }
  return (
    <div>Mouse

        <div className='box'>
            <div className='header'>
            <p>{size}</p>
            <button>clear</button>
            </div>
            <div className='boxes' onMouseMove={mouse}>

            </div>
        </div>
    </div>
  )
}

export default Mouse