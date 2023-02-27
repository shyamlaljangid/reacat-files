import React from 'react'
import { Provider } from 'react-redux'
import Store from '../app/store'
import App from './App'

function Index() {
  return (
    <div> 


        <Provider store={ Store}>
            <App />
        </Provider>
    </div>
  )
}

export default Index