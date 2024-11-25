// Importing necessary React hooks
import { useState, useEffect } from 'react'
// Importing the paginate function for pagination logic
import paginate from './utils'

// The URL for fetching the followers data from GitHub API
const url = 'https://api.github.com/users/john-smilga/followers?per_page=100'

export const useFetch = () => {
  // State to track loading status
  const [loading, setLoading] = useState(true)
  // State to store the fetched data
  const [data, setData] = useState([])

  // Async function to fetch the data from the GitHub API
  const getProducts = async () => {
    // Fetching data from the URL
    const response = await fetch(url)
    // Parsing the response to JSON format
    const data = await response.json()
    // Applying pagination to the data and updating the state
    setData(paginate(data))
    // Setting loading to false once the data is fetched
    setLoading(false)
  }

  // Using useEffect hook to call getProducts on component mount
  useEffect(() => {
    getProducts()
  }, []) // Empty dependency array to call only once on mount

  // Returning the loading state and the fetched data
  return { loading, data }
}
