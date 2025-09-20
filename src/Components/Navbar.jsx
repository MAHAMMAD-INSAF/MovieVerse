import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className='bg-gradient-to-r from-blue-800 to-blue-900 p-1 px-8 flex justify-between items-center shadow-lg backdrop-blur-md border-b border-white/10'>
      <div className="text-2xl font-bold">
        <Link to="/" className='text-white hover:text-blue-200 transition-colors'>MovieVerse</Link>
      </div>
      <div className="flex gap-8">
        <Link to="/" className='text-lg px-4 py-2 rounded-full transition-all duration-300 relative overflow-hidden hover:bg-white/10 hover:-translate-y-0.5 hover:shadow-lg text-white'>Home</Link>
        <Link to="/Favorites" className='text-lg px-4 py-2 rounded-full transition-all duration-300 relative overflow-hidden hover:bg-white/10 hover:-translate-y-0.5 hover:shadow-lg text-white'>Favorites</Link>
      </div>
    </nav>
  )
}

export default Navbar