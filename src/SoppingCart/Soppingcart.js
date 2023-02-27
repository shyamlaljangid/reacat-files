import axios from 'axios'
import React, { useEffect, useState } from 'react'
import "./shopping.css"
// import { Link, Outlet } from 'react-router-dom'
import ShoppingContext from './ShoppingContext'
import Home from './Home'
import Cart from './Cart'


function Soppingcart() {

    const[cart ,setcart] = useState([])
    const[pro ,setpro] = useState(
        sessionStorage.getItem("item") !== null 
        ? JSON.parse(sessionStorage.getItem("item"))
        :[]

    )
    useEffect(()=>{
        async function data(){
            const result = await axios("https://fakestoreapi.com/products/")

                console.log(result.data)
                setcart(result.data)
        }
   data()
    },[])
    useEffect(()=>{
        sessionStorage.setItem("item",JSON.stringify(pro));
      },[pro])

  function cartproduct(e,index){
          e.preventDefault()
          setpro([...pro ,index])


          console.log(pro)

  }

  return (

<> 
    <ShoppingContext.Provider value={{pro , cart ,setcart  }}>
            <Home />
            {/* <Cart /> */}
    </ShoppingContext.Provider>

   
    <div className='box'>

        {
            cart.map((cart,index)=>{
                return(
               <div key={index} className="product">
                  <img src={cart.image}></img>
                  <h2>{cart.title}</h2>
                  <h3> price : ${cart.price}</h3>
                  <a href='' onClick={ (e)=>cartproduct(e,index)}>Add to cart</a>
               </div>)

            })
        }
    </div>
    </>
  )
}

export default Soppingcart
