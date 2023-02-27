import React, { useContext, useState } from 'react'
import ContextApi from './ContextAPI'

function Cart() {

  const { pro, setpro } = useContext(ContextApi)
  const[ Quantity ,setQuantity]=useState(1)
   function QuantityValue(e){
   setQuantity(e.target.value)}


  return (
    <div>Cart

      {
        pro.map((SingleProduct, index) => {
          return (<>         
             <div className='div' key={index}>
            <img src={SingleProduct.photo}></img>
            <p>{SingleProduct.text}</p>
            <h1>${SingleProduct.price}</h1>
          </div>
            <input type="number" placeholder="Quantity" value={Quantity} onChange={QuantityValue}></input>
            <h2> price:₹ {SingleProduct.price*82*Quantity}</h2>
          </>

          )
        })
      }


    </div>
  )
}

export default Cart