// Import necessary modules and components
import React from 'react'
import { useGlobalContext } from './context' // Custom hook to access global context
import { Link } from 'react-router-dom' // Link component for navigation

// Default URL for a placeholder image when a poster is not available
const url = 'https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png'

// Movies component to display a list of movies
const Movies = () => {
  // Destructure 'movies' and 'isLoading' from the global context
  const { movies, isLoading } = useGlobalContext()

  // Display a loading indicator if data is still being fetched
  if (isLoading) {
    return <div className='loading'></div>
  }

  // Render a section containing movie cards
  return (
    <section className='movies'>
      {movies.map((movie) => {
        // Destructure necessary properties from the movie object
        const { imdbID: id, Poster: poster, Title: title, Year: year } = movie

        // Render each movie as a clickable card with a link to the movie's details page
        return (
          <Link to={`/movies/${id}`} key={id} className='movie'>
            <article>
              {/* Use the placeholder image if the poster is unavailable */}
              <img src={poster === 'N/A' ? url : poster} alt={title} />
              <div className='movie-info'>
                {/* Display the movie title */}
                <h4 className='title'>{title}</h4>
                {/* Display the release year */}
                <p>{year}</p>
              </div>
            </article>
          </Link>
        )
      })}
    </section>
  )
}

// Export the Movies component as the default export
export default Movies
