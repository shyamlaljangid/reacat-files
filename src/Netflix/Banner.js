import axios from 'axios'
import React, { useEffect, useState } from 'react'
import requests from './Netflixdummy'


function Banner() {
       const [banner,setbanner] =useState([])
       let path_data ="https://api.themoviedb.org/3/"
       let movies_path = "https://image.tmdb.org/t/p/original"
       


  useEffect(()=>{
    async function bannerdata(){
       let result =await axios.get(path_data +requests.fetchTrending)
       console.log(result.data.results)

       setbanner(result.data.results[Math.floor(Math.random()*result.data.results.length)])

    }

      bannerdata()
  },[])


  return (
    <div className='banner' style={{backgroundImage:'url('+ movies_path + banner.backdrop_path +')'}}>
        <h1>{banner.title}</h1>
        <p>{banner.overview}</p>
        <div className='anchor'>
        <a href=''>Play </a>
        <a href=''>Menu</a>
        </div>
      

       
    </div>
  )
}

export default Banner