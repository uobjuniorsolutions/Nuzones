// React imports
import React from 'react'
import { Route, Routes } from 'react-router-dom'

// Components imports
import About from './components/About'
import FindZone from './components/FindZone'
import Contact from './components/Contact'
import Home from './components/Home'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'

function App() {
  return (
    <>
        <Navbar />
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/zone' element={<FindZone />}/>
            <Route path='/about' element={<About />}/>
            <Route path='/contact' element={<Contact />}/>
        </Routes>
        <Footer />
    </>
  )
}

export default App