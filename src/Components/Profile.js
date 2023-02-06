import React, { useContext } from 'react'
import LoginContext from '../LoginContext'

function Profile() {
   const {username , Email} =  useContext(LoginContext)

  return (
    <div>
        <h2>username : {username}</h2>
        <h2>userEmail : {Email}</h2>
    </div>
  )
}

export default Profile