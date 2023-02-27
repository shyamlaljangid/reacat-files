import React, { useContext, useState } from 'react'
import ContextApi from './ContextApi'

function Fahrenheit() {

 const{ FValue,CelciusConvert,ConvertToC}= useContext(ContextApi)
  
    return (
        <div><h1>Fahrenheit</h1>


            <input type="number" value={FValue} onChange={ConvertToC} placeholder="Enter your Celcius"></input>
            <button  onClick={CelciusConvert}>Convert to C</button>
        </div>
    )
}

export default Fahrenheit