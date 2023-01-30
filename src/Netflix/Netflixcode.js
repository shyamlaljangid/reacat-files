import { style } from '@mui/system'
import axios from 'axios'
import React, { useEffect, useState } from 'react'


import "./Netflix.css"

function Netflixcode(props) {
    
    let [photo, setphoto] = useState([])
    let movies_path = "https://image.tmdb.org/t/p/original"
    let path_data ="https://api.themoviedb.org/3/"

   useEffect(()=>{
      async function data(){
        let rus =await axios.get(path_data + props.images)
        setphoto(rus.data.results)
        console.log(rus.data.results)
      }
      data()
   },[])
  return (
    <>
      
      <div>
         <h1>{props.heading}</h1>

      <div className='top'>

         {
            
            photo.map((mov , ind)=>{
              return(
                <div className={(props.big === true)?"flex big":"flex"}>
                <img src={movies_path + mov.poster_path }  key={ind}></img>
                </div>
                )
            })  
    
       }
       </div>

      </div>

    </>
  )
}

export default Netflixcode