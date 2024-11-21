// Import necessary React features
import React, { useContext, useEffect, useReducer } from 'react'

// Import action types to be used with the reducer
import {
  SET_LOADING,
  SET_STORIES,
  REMOVE_STORY,
  HANDLE_PAGE,
  HANDLE_SEARCH,
} from './actions'

// Import the reducer function that will handle state changes
import reducer from './reducer'

// Define the base API endpoint for fetching data
const API_ENDPOINT = 'https://hn.algolia.com/api/v1/search?'

// Define the initial state of the application
const initialState = {
  isLoading: true, // Indicates whether data is being loaded
  hits: [],        // Stores the fetched stories
  query: 'react',  // Default search query
  page: 0,         // Current page number
  nbPages: 0,      // Total number of pages available
}

// Create a context to share state across components
const AppContext = React.createContext()

// Define the provider component to wrap the application and manage state
const AppProvider = ({ children }) => {
  // Use the `useReducer` hook to manage complex state logic
  const [state, dispatch] = useReducer(reducer, initialState)

  // Function to fetch stories from the API
  const fetchStories = async (url) => {
    dispatch({ type: SET_LOADING }) // Set loading to true before fetching data
    try {
      const response = await fetch(url) // Make an API call
      const data = await response.json() // Parse the response JSON
      dispatch({
        type: SET_STORIES, // Update state with fetched data
        payload: { hits: data.hits, nbPages: data.nbPages },
      })
    } catch (error) {
      console.log(error) // Log any errors
    }
  }

  // Function to remove a specific story by its ID
  const removeStory = (id) => {
    dispatch({ type: REMOVE_STORY, payload: id })
  }

  // Function to update the search query
  const handleSearch = (query) => {
    dispatch({ type: HANDLE_SEARCH, payload: query })
  }

  // Function to navigate between pages
  const handlePage = (value) => {
    dispatch({ type: HANDLE_PAGE, payload: value })
  }

  // Use the `useEffect` hook to fetch stories whenever the query or page changes
  useEffect(() => {
    fetchStories(`${API_ENDPOINT}query=${state.query}&page=${state.page}`)
  }, [state.query, state.page])

  // Provide the state and functions to the component tree
  return (
    <AppContext.Provider
      value={{ ...state, removeStory, handleSearch, handlePage }}
    >
      {children}
    </AppContext.Provider>
  )
}

// Custom hook for consuming the global context
export const useGlobalContext = () => {
  return useContext(AppContext)
}

// Export the context and provider for use in the app
export { AppContext, AppProvider }
