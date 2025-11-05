import React from 'react'
import {Route} from 'react-router-dom'
import {Routes } from 'react-router-dom'

import Landing from './pages/landing/landing.jsx'

const App = () => {
  return (
   <Routes>
    <Route path='/' element={<Landing/>} />
   </Routes>
  )
}

export default App