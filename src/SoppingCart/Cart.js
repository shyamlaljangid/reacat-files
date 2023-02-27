import React, { useContext, useState } from 'react'
import ShoppingContext from './ShoppingContext'

function Cart() {

  const {carts} = useContext(ShoppingContext)
  const[cart,setcard] = useState(null)

  return (
    <div>
      <h1>User list </h1>
     
     {
      cart.map((a)=>{
        return(
        <p>{a.title}</p>
        )
      })
     }
      
    </div>
  )
}

export default Cart