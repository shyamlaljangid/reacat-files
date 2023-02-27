import React from 'react'
import { Outlet } from 'react-router-dom'

function Fixed() {
  return (
    <div>
        <Outlet />
    </div>
  )
}

export default Fixed