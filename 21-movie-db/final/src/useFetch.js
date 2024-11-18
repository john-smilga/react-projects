// Importing React and required hooks from the React library
import React, { useState, useEffect } from 'react'

// Define the base API endpoint for fetching movie data
// The API key is retrieved from environment variables for security
const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}`

// Custom hook for fetching data from the OMDB API
const useFetch = (urlParams) => {
  // State to manage the loading status of the API request
  const [isLoading, setIsLoading] = useState(true)

  // State to manage error information if the API request fails
  const [error, setError] = useState({ show: false, msg: '' })

  // State to store the data retrieved from the API
  const [data, setData] = useState(null)

  // Function to fetch movies data from the API
  const fetchMovies = async (url) => {
    // Set loading state to true before making the request
    setIsLoading(true)
    try {
      // Fetch data from the provided URL
      const response = await fetch(url)
      const data = await response.json()

      // Check if the API response is successful
      if (data.Response === 'True') {
        // If successful, update the data state
        // Use `data.Search` if it exists, otherwise use the full response
        setData(data.Search || data)

        // Reset error state as the request was successful
        setError({ show: false, msg: '' })
      } else {
        // If the API returns an error, update the error state
        setError({ show: true, msg: data.Error })
      }
      // Set loading state to false after the request is completed
      setIsLoading(false)
    } catch (error) {
      // Log any unexpected errors during the fetch
      console.log(error)
    }
  }

  // `useEffect` hook to fetch movies whenever `urlParams` changes
  useEffect(() => {
    fetchMovies(`${API_ENDPOINT}${urlParams}`)
  }, [urlParams]) // Dependency array ensures fetchMovies runs when `urlParams` updates

  // Return the state variables and data from the custom hook
  return { isLoading, error, data }
}

// Export the custom hook for use in other components
export default useFetch
