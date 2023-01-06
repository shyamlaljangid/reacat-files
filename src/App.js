import { useState } from "react"

function Counter(){
      
   let [count ,setCount] = useState(0)

    function IncrementCount(){
        if(count <20)
        setCount(count + 1)}
    
    function DecrementCount(){
        if(count >=1)
        setCount(count - 1)
    }


   return(
    <>
    <button onClick={IncrementCount}>Increment</button>
    <p>{count}</p>
    <button onClick={DecrementCount}>Decrement</button>
    </>
    )
}
export default Counter