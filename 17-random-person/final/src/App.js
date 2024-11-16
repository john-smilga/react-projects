// Import React and necessary hooks
import React, { useState, useEffect } from 'react'

// Import icons from react-icons library
import {
  FaEnvelopeOpen,
  FaUser,
  FaCalendarTimes,
  FaMap,
  FaPhone,
  FaLock,
} from 'react-icons/fa'

// API URL to fetch random user data
const url = 'https://randomuser.me/api/'

// Default image to display when no user image is available
const defaultImage = 'https://randomuser.me/api/portraits/men/75.jpg'

function App() {
  // State to manage loading status
  const [loading, setLoading] = useState(true)
  
  // State to store user data
  const [person, setPerson] = useState(null)
  
  // State to display the value of the selected attribute (e.g., name, email)
  const [value, setValue] = useState('random person')
  
  // State to display the title of the selected attribute
  const [title, setTitle] = useState('name')

  // Function to fetch a random user from the API
  const getPerson = async () => {
    setLoading(true) // Set loading to true before fetching data
    const response = await fetch(url) // Fetch data from the API
    const data = await response.json() // Parse the response JSON
    
    // Extract relevant details from the API response
    const person = data.results[0]
    const { phone, email } = person
    const { large: image } = person.picture
    const { password } = person.login
    const { first, last } = person.name
    const {
      dob: { age },
    } = person
    const {
      street: { number, name },
    } = person.location

    // Create a new object with the formatted user data
    const newPerson = {
      image,
      phone,
      email,
      password,
      age,
      street: `${number} ${name}`,
      name: `${first} ${last}`,
    }

    // Update state with the new user data
    setPerson(newPerson)
    setLoading(false) // Set loading to false after data is fetched
    setTitle('name') // Default title to 'name'
    setValue(newPerson.name) // Default value to user's name
  }

  // useEffect runs once when the component is mounted
  useEffect(() => {
    getPerson() // Fetch initial random user
  }, [])

  // Event handler to update displayed value and title when hovering over icons
  const handleValue = (e) => {
    if (e.target.classList.contains('icon')) {
      const newValue = e.target.dataset.label // Get the label from the data attribute
      setTitle(newValue) // Update the title
      setValue(person[newValue]) // Update the value with the corresponding user detail
    }
  }

  // Render the UI
  return (
    <main>
      {/* Background block for visual styling */}
      <div className='block bcg-black'></div>
      
      {/* Main content block */}
      <div className='block'>
        <div className='container'>
          {/* User image */}
          <img
            src={(person && person.image) || defaultImage} // Display user image or default image
            alt='random user'
            className='user-img'
          />
          
          {/* Display title and value of the selected attribute */}
          <p className='user-title'>My {title} is</p>
          <p className='user-value'>{value}</p>
          
          {/* Icons for different attributes */}
          <div className='values-list'>
            <button
              className='icon'
              data-label='name' // Data label corresponding to the 'name' attribute
              onMouseOver={handleValue} // Update displayed value on hover
            >
              <FaUser />
            </button>
            <button
              className='icon'
              data-label='email' // Data label corresponding to the 'email' attribute
              onMouseOver={handleValue}
            >
              <FaEnvelopeOpen />
            </button>
            <button
              className='icon'
              data-label='age' // Data label corresponding to the 'age' attribute
              onMouseOver={handleValue}
            >
              <FaCalendarTimes />
            </button>
            <button
              className='icon'
              data-label='street' // Data label corresponding to the 'street' attribute
              onMouseOver={handleValue}
            >
              <FaMap />
            </button>
            <button
              className='icon'
              data-label='phone' // Data label corresponding to the 'phone' attribute
              onMouseOver={handleValue}
            >
              <FaPhone />
            </button>
            <button
              className='icon'
              data-label='password' // Data label corresponding to the 'password' attribute
              onMouseOver={handleValue}
            >
              <FaLock />
            </button>
          </div>
          
          {/* Button to fetch a new random user */}
          <button className='btn' type='button' onClick={getPerson}>
            {loading ? 'loading...' : 'random user'} {/* Display loading state */}
          </button>
        </div>
      </div>
    </main>
  )
}

export default App
