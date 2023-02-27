import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { Increment ,Decrement } from '../fetures/counter/counterSlice'
function App() {
    const number= useSelector((state)=>
          
    state.count.value)

    const dispatch =useDispatch()

  return (
    <div>

        <button onClick={()=>dispatch(Increment())}>Increment</button>
        <p>{number}</p>
        <button onClick={()=>dispatch(Decrement())}>Decrement</button>
    </div>
  )
}

export default App