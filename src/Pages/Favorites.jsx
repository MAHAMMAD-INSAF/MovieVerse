import React from 'react'
import { useMovieContext } from '../contexts/MovieContext'
import MovieCard from '../Components/MovieCard';

function Favorites() {

  const {favorites} = useMovieContext();

  if(favorites && favorites.length > 0)
  {
    return(
      <div className="p-16 w-full min-h-[60vh]">
      <h2 className="mb-12 text-center text-5xl  bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent drop-shadow-lg">Your Favorites</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 p-4 max-w-7xl mx-auto">
        {favorites.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>

    </div>
    )
  }

    return (

     <div className='text-center p-16 bg-white/5 rounded-3xl mx-auto max-w-2xl'>
      <h2 className="mb-4 text-3xl text-red-600">No Favorite Movies yet</h2>
      <p className="text-slate-400 text-lg leading-relaxed">Start adding movies to your favorites and they will appear here</p>
    </div>


  )
}


export default Favorites