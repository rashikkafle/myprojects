import React from 'react'
import {  BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import CricSC from './CricSC'
import Cricket from './Cricket'
import Secondinning from './Secondinning'


function App() {
  return (
   <>
   <Router>
    <Routes>
            <Route path='/' element={<Cricket/>}/>

      <Route path='/CricSc' element={<CricSC/>}/>
            <Route path='/Cricket' element={<Cricket/>}/>
                  <Route path='/Secondinning' element={<Secondinning/>}/>

    </Routes>
   </Router>

   </>
  )
}

export default App
