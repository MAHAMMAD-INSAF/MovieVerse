import React, { useState } from 'react'

import MovieCard from './Components/MovieCard.jsx'
import Home from './Pages/Home.jsx'
import { Route, Routes } from 'react-router-dom'
import Favorites from './Pages/Favorites.jsx'
import Navbar from './Components/Navbar.jsx'
import Footer from './Components/Footer.jsx'
import { MovieProvider } from './contexts/MovieContext.jsx'

function App() {


  return (
    <MovieProvider>
      <Navbar/>
    <main className='flex-1 p-8'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Favorites' element={<Favorites/>}/>
      </Routes>
    </main>
    <Footer />
    </MovieProvider>
  )
}

export default App
