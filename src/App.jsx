import { useState } from 'react'
import Nav from './components/Nav.jsx'
import Header from './components/Header.jsx'
import Section from './Section.jsx'
import './App.css'


function App() {
  const [continent, setContinent] = useState('')


  return (
    <>
    <Nav setContinent={setContinent}/>
    <Header/>
    <Section continent={continent}/>
   
    </>
  )
}

export default App
