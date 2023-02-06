import React , {useState} from 'react'
import Form from './Components/Form'
import Profile from './Components/Profile'
import LoginContext from './LoginContext'

function ContextApi() {
    const [username , setusername] = useState('')
    const [Email , setEmail] = useState('')
    const [formSubmit ,setformSubmit] = useState(false)
    function babo(e){
        e.target.user === 'username'
         ? setusername(e.target.value)
         : setEmail(e.target.value)
    }

  return (

    <div>
        <LoginContext.Provider value={{babo , setformSubmit,username , Email}}>

            {formSubmit ?  <Profile/> :<Form/> }
       
        </LoginContext.Provider>
     
    </div>
   
  )
}

export default ContextApi