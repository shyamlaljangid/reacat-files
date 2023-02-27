import React ,{useState}from 'react'
import Celcius from './Celcius'
import Farehenite from './Farehenite'
import Converttotemp from './Converttotemp'

function App() {
  const[values ,setvalues] =useState('')
  function convertf(){

       let  F =  values*9/5+32

       console.log(F)
       setvalue(F)
  }


  function valuechanges(e){
         setvalues( e.target.value)
  
  }



  const [valuef, setvalue] = useState('')
  function convertc() {

    let C = (valuef - 32) * 5 / 9

    console.log(C)
    setvalues(C)
  }


  function valuechange(e) {
    setvalue(e.target.value)

  }

  
  return (
    <div>




      <Converttotemp.Provider value={{valuef,setvalue ,convertc ,valuechange,valuechanges ,convertf,values}}>
        <Celcius />
        <Farehenite />
      </Converttotemp.Provider>
    </div>
  )
}

export default App