import React, { useContext, useState } from 'react'
import LoginContext from '../LoginContext'

function Form() {
    
    //DESTRUCTORING
    const {setformSubmit ,babo } = useContext(LoginContext)

    function FormSubmit(e){
        e.preventDefault()
        setformSubmit(true)
    }

  return (
    <div>
        <form  onSubmit={FormSubmit}>
            <input type='text' user='username' onChange={babo} placeholder='Enter your Name' />
            <input type='email'user='Email' onChange={babo}  placeholder='Enter your Email' />
            <button type='submit'>Submit</button>
        </form>

    </div>
  )
}

export default Form