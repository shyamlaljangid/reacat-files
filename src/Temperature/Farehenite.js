import React,{useState} from 'react'
import { useContext } from 'react'
import Converttotemp from './Converttotemp'
function Farehenite() {

const {valuef , valuechange ,convertc } = useContext(Converttotemp)




  return (
    <div>

    <input type="text" placeholder='farehenite' value={valuef} onChange={valuechange}></input>
    <button onClick={convertc}> Convert to Celcius</button>
    </div>

  )
}

export default Farehenite