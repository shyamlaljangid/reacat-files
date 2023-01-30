import React, { useEffect } from 'react'

function Game_three_3() {
    const[time,settime] =useEffect()

     setInterval(()=>{
         settime + 1
     },1000)


  return (
    <div> <div className='three-page'>
    <div className='time-score'>
        <div className='time'>
            <h1>time: <span>{time}</span></h1>
        </div>
        <div className='score'>
        <h1>score: <span>0</span></h1>
        </div>


    </div>
    <div className='game-start-img'>

    </div>
</div>
</div>
  )
}

export default Game_three_3