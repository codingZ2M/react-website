
import React from 'react'
import {Routes,  Route } from 'react-router-dom'
import Footer from './components/Footer'
import NavBar from './components/NavBar'
import Headphones from './components/product/Headphones'
import Speakers from './components/product/Speakers'
import Home from './pages/Home'

const App = () => {
  return (
    <div className='mt-0 flex flex-col min-h-screen w-screen'>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/productCategory/speakers" element={<Speakers/>} />
        <Route path="/productCategory/headphones" element={<Headphones/>} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App