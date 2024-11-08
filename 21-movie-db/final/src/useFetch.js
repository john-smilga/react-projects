import React, { useState, useEffect } from 'react'

// Define the API endpoint for the OMDB API with the API key from environment variables.
const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}`

/**
 * Custom hook to fetch movie data from the OMDB API.
 * 
 * @param {string} urlParams - Additional URL parameters to customize the API request.
 * 
 * @returns {object} - An object containing:
 *    - `isLoading` (boolean): Indicates if data is still being fetched.
 *    - `error` (object): An object with:
 *       - `show` (boolean): True if there's an error; false otherwise.
 *       - `msg` (string): The error message, if any.
 *    - `data` (any): The fetched data, either an array of movies or a single movie object.
 */
const useFetch = (urlParams) => {
  const [isLoading, setIsLoading] = useState(true) // State to track loading status
  const [error, setError] = useState({ show: false, msg: '' }) // State to track errors
  const [data, setData] = useState(null) // State to store fetched data

  /**
   * Fetches movie data from the OMDB API.
   * 
   * @param {string} url - The full API request URL.
   * 
   * This function sends a GET request to the API and updates state based on the response.
   * If the response is successful (`Response: "True"`), it saves the data.
   * Otherwise, it sets an error with the returned message.
   */
  const fetchMovies = async (url) => {
    setIsLoading(true) // Start loading
    try {
      const response = await fetch(url) // Fetch data from the API
      const data = await response.json() // Parse the JSON response

      // Check if the response was successful
      if (data.Response === 'True') {
        setData(data.Search || data) // Store either an array of movies or a single movie object
        setError({ show: false, msg: '' }) // Reset error state
      } else {
        setError({ show: true, msg: data.Error }) // Set error if response was unsuccessful
      }
      setIsLoading(false) // Stop loading
    } catch (error) {
      console.log(error) // Log any fetch errors to the console
      setError({ show: true, msg: 'Network error occurred' }) // Display generic network error
      setIsLoading(false)
    }
  }

  // Fetch data whenever `urlParams` changes
  useEffect(() => {
    fetchMovies(`${API_ENDPOINT}${urlParams}`)
  }, [urlParams])

  return { isLoading, error, data } // Return state values to the component
}

export default useFetch
