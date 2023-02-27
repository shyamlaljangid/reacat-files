import React, { useContext, useState } from 'react'
import ContextApi from './ContextApi'

function Celcius() {
     const {CValue,ConvertToF,FConvert} = useContext(ContextApi)

  return (
    <div> <h1>Celcius</h1>
  
       <input type="number"  value={CValue} onChange={ConvertToF}  placeholder="Enter your Celcius"></input>
       <button onClick={FConvert} >Convert to f</button>

    </div>
  )
}

export default Celcius