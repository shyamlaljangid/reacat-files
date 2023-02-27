import React,{createContext, useReducer} from 'react'

function Form() {
     

    const initialState ={
        name:"",
        age:"",
        email:'',
        number:"",
        submitted :false,
    }
   
    function reducer(state, action){
        switch(action.type){
            case "inputUpdate":
            return { ...state ,[action.name]:action.value}

            case "Submit":
              console.log(state)
              return {...state ,submitted :true }
                default :
                 return state
        }

    }



    const [state, Dispatch] = useReducer(reducer, initialState)
    
      function Submit(e){
        e.preventDefault()
        Dispatch({type :"Submit"})
        // console.log(state)
      }

      function handlChange(e){
        Dispatch({
           type : "inputUpdate" ,
           name:e.target.name,
           value:e.target.value

        })
      }



  return (
    <div><h1>Form</h1>
    
      <form onSubmit={Submit}>
        <input type="text"  name ="name" value={state.name} placeholder='Enter Your Name' onChange={handlChange}></input><br></br>
        <input type="number"  name ="age" value={state.age} placeholder='Enter Your age'  onChange={handlChange}></input><br></br>
        <input type="number"  name ="number" value={state.number} placeholder='Enter Your Number' onChange={handlChange}></input><br></br>
        <input type="email" name ="email"  value={state.email} placeholder='Enter Your Email' onChange={handlChange}></input><br></br>
        
        <button type="submit">submit</button>
      </form>
    
    </div>
  )
}

export default Form




// Installation
// Components
// Props
// How to pass props as arguments
// State
// useState
// Component Composition
// APIs with Axios
// useEffect
// Routing: BrowserRoutes, Routes, Route, Link, NavLink, Outlet
// Redirect
// useParams
// useNavigate
// contextAPI: createContext, useContext, Provider, Consumer
