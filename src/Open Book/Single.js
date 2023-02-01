import React from 'react'
import axios from 'axios'
import { useState ,useEffect } from 'react' 
import { useParams } from 'react-router-dom'

function Single() {
       const {id} = useParams()
    const[books, setbooks] = useState('')
    useEffect(()=>{
        async function data(){
            const  result = await axios.get("https://openlibrary.org/books/"+id+".json")
            setbooks(result.data)
        }
        data()

    },[])

  return (
    <div className='box-img+'>
        <h1>{books.title}</h1>
        {/* <p>{books.authors[0].name}</p> */}
        <img src={`https://covers.openlibrary.org/b/id/${books.covers}-M.jpg`}></img>
    </div>
  )
}

export default Single