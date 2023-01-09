import { useState } from "react"

function Counter(){
      
   let [count ,setCount] = useState(0)
    function IncrementCount(e, change){
        e.preventDefault()

        if(change ==="inc"){
          if(count <10 ){
            setCount(count + 1)
          }
        }
        else{
          if(count >0){
            setCount(count - 1)
          }
        }

          // change === "inc" ? setCount(count + 1) :setCount(count - 1)
    }

   return(
    <>
    <a href="" onClick={(e)=>IncrementCount(e ,"inc")}>Increment</a>
    <p>{count}</p>
    <a  href ="" onClick={(e)=>IncrementCount(e ,"dec")}>Decrement</a>
    </>
    )
}
export default Counter