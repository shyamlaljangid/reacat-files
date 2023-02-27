import React from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import Converttotemp from './Converttotemp'

function Celcius() {
  
     const {convertf ,values ,valuechanges} =useContext(Converttotemp)
  

  return (
<>
    {/* <Converttotemp.Consumer  value={values}>
                       
    </Converttotemp.Consumer> */}
    <div>
      <input type="number" placeholder='Celcius'  value={values} onChange={valuechanges}></input>
      <button onClick={convertf}>Convert to farehenite</button>
    </div>
    </>
  )
}

export default Celcius