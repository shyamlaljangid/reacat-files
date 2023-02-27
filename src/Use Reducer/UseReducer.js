import React, { useReducer } from 'react'

function UseReducer() {

    const plus = { count: 0 }


    const [vinay, shyam] = useReducer(reducer, plus)

    function reducer(vinay, change) {


        if(change.type ==="inc"){
            return{count:vinay.count+1} 
        }
        else{
           return {count:vinay.count-1}
        }
        // return vinay
        // switch (change.type) {
        //     case "inc":
        //         return { count: vinay.count + 1 }
        //     case "dec":
        //         return { count: vinay.count - 1 };
        //     default:
        //         return vinay

        // }

        }
    return (
  <div>
        <button onClick={() => shyam({ type: "inc" })}>+</button>

            <p>{vinay.count}</p>

            <button onClick={() => shyam({ type: "dec" })}>-</button>
        </div>
    )
}

export default UseReducer