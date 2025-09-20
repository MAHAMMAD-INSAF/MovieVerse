 import React from 'react'
import { useMovieContext } from '../contexts/MovieContext';



 function MovieCard({movie}) {

  const {isFavorite,addToFavorites,removeFavorites} = useMovieContext()
  const favorite = isFavorite(movie.id)

  function onFavoriteClick(e) {
    e.preventDefault();
    if(favorite) removeFavorites(movie.id)
    else addToFavorites(movie)
  }

   return (
     <div className='relative rounded-2xl overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl h-full flex flex-col'>
      <div className="relative aspect-[2/3] w-full">
        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-200 flex flex-col justify-end p-4">
          <button className={`absolute top-4 right-4 text-2xl p-2 bg-black/50 rounded-full w-10 h-10 flex items-center justify-center transition-all hover:bg-black/80 ${favorite ? "text-red-500" : "text-white"}`} onClick={onFavoriteClick}>
                ♥
          </button>
        </div>
      </div>
      <div className="p-4 flex-1 flex flex-col gap-2">
        <h3 className="text-lg font-semibold text-white leading-tight">{movie.title}</h3>
        <p className="text-slate-400 text-sm">{movie.release_date?.split("-")[0]}</p>
      </div>
     </div>
   )
 }

 export default MovieCard
