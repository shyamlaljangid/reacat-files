import React, { useEffect, useState } from 'react'
import axios from "axios"
import "./Ecommerce.css"
function Axios() {
    const[product ,setprodut] = useState([])


    useEffect(()=>{
      axios.get("https://dummyjson.com/products")
        .then((response)=>{
          
             setprodut(response.data.products)
          
          }
)

    },[])
   
  return (
    <>
        <h1> Ecommerse</h1>
           

      <div className='flex'>
        
        { product.map((products)=>{
            return(
            <div className='body'>
               <h2>{products.brand}</h2>
             <img src={products.thumbnail}></img>
             <h2>{products.title}</h2>
            
             <h3>{products.price}</h3>

             </div>)
          })}
        
        </div>

    </>
  )
 
}

export default Axios
