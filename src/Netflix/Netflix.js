import React from 'react'
import Netflixcode from './Netflixcode'
import requests from './Netflixdummy'
import Banner from './Banner'
import Header from './Header'
import { HeadsetRounded } from '@mui/icons-material'

function Netflix() {
  return (
    <div>



      <Header 
      
      
      
      />
      <Banner
      
      />

     <Netflixcode
       heading="Netflix Originals"
       images ={requests.fetchNetflixOriginals}
       big ={true}
    
    />
     <Netflixcode 
       heading= "Trending"  
        images ={requests.fetchTrending}
    />
    <Netflixcode
       heading="Action Movies"
       images ={requests.fetchActionMovies}
    
    />
    <Netflixcode
       heading="Comady Movies"
       images ={requests.fetchComedyMovies}
    
    />
    <Netflixcode
       heading="Top Rated"
       images ={requests.fetchTopRated}
    
    />
    <Netflixcode
       heading="RomanceMovies"
       images ={requests.fetchRomanceMovies}
    
    />
    <Netflixcode
       heading="Horror Movies"
       images ={requests.fetchHorrorMovies}
    
    />


    </div>
  )
}

export default Netflix