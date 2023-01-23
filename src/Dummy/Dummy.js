import axios from 'axios'
import React, { useEffect, useState } from 'react'
import "./Dummy.css"

function Dummy() {

  const [add, setadd] = useState("")
  const[movies ,setmovies] =useState([])
  let movies_path = "https://image.tmdb.org/t/p/original"
  let movies_defalt = "https://image.tmdb.org/t/p/original/sjf3xjuofctDhZghJRzX1TiEjJe.jpg"

 
  function save(e) {
    setadd(e.target.value)
  }

  function submitform(e) {
    e.preventDefault()
    async function data() {
      let response = await axios.get('https://api.themoviedb.org/3/search/movie?api_key=251ac7a461ba588030cfa89b0cd75329&language=en-US&query=' + add+ '&page=1&include_adult=false')
      console.log(response.data.results)

      setmovies(response.data.results)
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
               <img src={null ? movies_defalt : movies_path+ movies.poster_path}></img>
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