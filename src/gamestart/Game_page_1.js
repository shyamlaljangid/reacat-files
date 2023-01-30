import { display, style } from '@mui/system'
import React, { useState } from 'react'

function Game_page_1() {
     const[gamestart, setstart] =useState(true)
     

    function start(){
          setstart(false)
    }


  return (
    <div>

        <div className='front-page' style={{display:(gamestart ===false)?"none": "block"}} >
        <h1>Catch the cheems</h1>
        <button onClick={start} >start game
</button>
    </div>
    </div>
  )
}

export default Game_page_1