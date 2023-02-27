import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ContextApi from './ContextAPI'

function Detail() {
    const {id} = useParams()
    const [detail , setDetail] = useState('')
     const {pro ,getproduct ,index}= useContext(ContextApi)

    useEffect(()=>{
        async function fetch(){
            const result = await axios.get('https://fakestoreapi.com/products/'+id)
            console.log(result)

            setDetail(result.data)
        }
        fetch()
    },[])
  return (
    <div className='shyam'>
        <div className='Single'>
        <img src={detail.image}></img>
        </div>
        <div className='singledetail'>
        <p>{detail.title}</p>
        <h1>${detail.price}</h1>

        {

       (   pro.find(item =>item.index ===detail.id)!==undefined)
          ?
          <p>Already Added</p>
          :<a href='' onClick={(e)=>getproduct(e,
            {
              photo:detail.image,
              text:detail.title,
              price:detail.price,
              index:detail.id
            })}>Add To Cart</a>
        
        }
       
        </div>
    

    </div>
  )
}

export default Detail