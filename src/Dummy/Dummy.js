import axios from 'axios'
import React, { useEffect, useState } from 'react'
import "./Dummy.css"

function Dummy() {

  const [add, setadd] = useState("")
  const[movies ,setmovies] =useState([])
  let movies_path = "https://image.tmdb.org/t/p/original"
 let dummy_path ='https://image.tmdb.org/t/p/original/sjf3xjuofCtDhZghJRzXlTiEjJe.jpg' 
  function save(e) {
    setadd(e.target.value)
  }

  function submitform(e) {
    e.preventDefault()
    async function data() {
      let response = await axios.get('https://api.themoviedb.org/3/search/movie?api_key=b08ca4bd6eb0a9c75ea466b597c3f272&language=en-US&query=' +add+'&page=1&include_adult=false')
      setmovies(response.data.results)
      console.log(response.data.results)
    }
      data()
  }



  return (
    <div>
      <div className='add'>
        <form onSubmit={submitform}>
          <input type="text" placeholder='Enter your ' value={add} onChange={save}></input>
          <button type='submit'>Search </button>
        </form>
      </div>
      <div>
        
        {
          movies.map((movies ,index)=>{
            return(
              
              <div key={index} className="flex-box">
               <img src={  (movies.poster_path === null) ? dummy_path: movies_path + movies.poster_path}></img>
               <h3>{movies.title}</h3>
              </div>
            )

          })
        }
      </div>

    </div>
  )
}

export default Dummy