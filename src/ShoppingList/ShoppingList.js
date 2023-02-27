import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ContextApi from './ContextAPI'


function ShoppingList() {

  const {product , getproduct ,pro } = useContext(ContextApi)

  return (
    <div className='box'>
              {
         product.map((products ,index)=>{
             return(
                <div className='boxes' key={products.id}>
                <Link to={`/products/${products.id}`}><img src={products.image}></img></Link>
                <p>{products.title}</p>
                <h1>${products.price}</h1>

                {
                  (pro.find(item =>item.index === products.id )!==undefined)
                  ?<p>Already Added</p>
                  :<a
                   href=''
                   onClick={(e)=>getproduct(e,{
                    photo:products.image,
                    text:products.title,
                    price:products.price,
                    index:products.id
                   })}
                   >Add to cart</a>

                }





                {/* {pro.includes(products.id)===false
                ?(
                <a href='' onClick={(e)=>getproduct(e,index)}>Add To Cart</a>)
              :<p>Added to cart</p>} */}
               
                
                </div>
             )
         })
                  

              }

    </div>
  )
}

export default ShoppingList