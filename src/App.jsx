import { useState } from 'react'
import Nav from './components/Nav.jsx'
import data from './components/Data.jsx'
import Details from './components/Details.jsx'
import Section from './Section.jsx'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Continent from './components/Continent.jsx'

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route index element={<Section />} />
        <Route path='/:selCtnnt' element={<Continent data={data} />} />
        <Route path='/details/:selCntry' element={<Details data={data} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
