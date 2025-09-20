import React, { useEffect, useState } from 'react'
import MovieCard from '../Components/MovieCard'
import { searchMovies,getPopularMovies } from '../Services/api'

function Home() {


  const[searchQuery,setSearchQuery] = useState('')
  const[movies,setMovies] = useState([])
  const [error,seterror] = useState(null)
  const [loading,setLoading] = useState(true);

  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        const popularMovies = await getPopularMovies()
        setMovies(popularMovies);
      } catch (error) {
        console.log(error)
        seterror("Failed to fetch popular movies");

      }
      finally
      {
        setLoading(false)
      }
    }
    loadPopularMovies();
  },[])

  const handlesearch = async (e) => {
    e.preventDefault();
    if(!searchQuery.trim()) return
    if(loading) return

    setLoading(true)
    try {
      const searchResults  = await searchMovies(searchQuery);
        setMovies(searchResults);
        seterror(null);

    } catch (error) {
      console.log(error);
      seterror("failed to search movies....")
    }
    finally
    {
      setLoading(false);
    }

  }

  return (
    <div className='w-full'>
      <section className="relative h-[60vh] bg-gradient-to-br from-purple-600 to-purple-800 flex items-center justify-center text-center text-white overflow-hidden -mt-4">
        <div className="relative z-10 max-w-4xl px-8">
          <h1 className="text-5xl mb-4 drop-shadow-lg">Discover Your Next Favorite Movie</h1>
          <p className="text-xl opacity-90">Explore a vast collection of movies, from classics to the latest releases. Search, browse, and add to your favorites!</p>
        </div>
      </section>

      <section className="py-8">
        <form onSubmit={handlesearch} className="max-w-2xl mx-auto mb-8 flex gap-4 px-4">
          <input type="text" placeholder='Search for movies...'
          className='flex-1 px-4 py-3 border-none rounded-lg bg-slate-800 text-white text-lg focus:outline-none focus:ring-2 focus:ring-slate-600'
          value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
          <button className="px-6 py-3 bg-red-600 text-white rounded-lg font-medium transition-colors hover:bg-red-700 whitespace-nowrap" type='submit'>Search</button>
        </form>

        {error && <div className="bg-red-500 text-white p-4 rounded-lg text-center mx-auto max-w-2xl mb-4 shadow-lg">{error}</div> }

        {loading ? (
          <div className="flex flex-col justify-center items-center h-48 text-2xl text-white">
            <div className="w-10 h-10 border-4 border-white/30 border-t-red-600 rounded-full animate-spin mb-4"></div>
            Loading movies...
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 p-4 max-w-7xl mx-auto">
            {movies.map((movie) => (
              <MovieCard movie={movie} key={movie.id} />
            ))}
          </div>
        )}
      </section>
    </div>
  )
}

export default Home