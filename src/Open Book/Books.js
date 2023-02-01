import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import "./Books.css"

function Books() {

 const[books, setbooks] = useState([])
    useEffect(()=>{
        async function data(){
            const  result = await axios.get("http://openlibrary.org/subjects/love.json?limit=20")
            // const  result = await axios.get("https://openlibrary.org/subjects/horror.json")
            console.log(result.data)
            setbooks(result.data.works)
        }
        data()
    },[])
  return (
    <div className='flex'>Books {
    books.map((book,ind)=>{

        return(
       <div className='box' key={ind}>

        <h1><Link to={`/books/${book.cover_edition_key}`}>{book.title}</Link></h1>

        <h2>{book.authors[0].name}</h2>

        <Link to={`/books/${book.cover_edition_key}`}><img src={`https://covers.openlibrary.org/b/id/${book.cover_id}-M.jpg`}></img></Link>
      
       </div>
      )
    })
  }

    </div>
  )
} 

export default Books