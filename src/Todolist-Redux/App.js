import React from 'react'
import { Provider } from 'react-redux'
import Home from './Home'

import store from '../app/store'

function App() {
  return (
    <div>

    <Provider store={store}>

    <Home />
    </Provider>


    </div>
  )
}

export default App