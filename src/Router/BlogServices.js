import React, { useState ,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

function BlogServices() {
    





    const [contant ,setcontant] =useState("")

    let {id} =useParams()

    

    useEffect(() => {
        async function Fatchdata(){
            const result = await axios.get("https://jsonplaceholder.typicode.com/posts/"+id)
            setcontant(result.data)
        }

       Fatchdata()
    },[])



  return (
    <div>

        <h2>{contant.id}</h2>
      <h1>{contant.title}</h1>

      <p>{contant.body}</p>
    </div>
  )
}

export default BlogServices