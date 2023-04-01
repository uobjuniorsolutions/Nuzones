// React imports
import React from 'react'
import { Route, Routes } from 'react-router-dom'

// Components imports
import About from './pages/About/About'
import FindZone from './pages/FindZone/FindZone'
import Contact from './pages/Contact/Contact'
import Home from './pages/Home/Home'
import Navbar from './pages/layout/Navbar'
import Footer from './pages/layout/Footer'

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