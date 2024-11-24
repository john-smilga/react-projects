// Importing necessary dependencies and components
import React, { useState, useEffect } from 'react';
import Loading from './Loading'; // Component to display a loading spinner
import Tours from './Tours'; // Component to display the list of tours

// URL for fetching tour data from an external API
const url = 'https://course-api.com/react-tours-project';

function App() {
  // State variables
  const [loading, setLoading] = useState(true); // Tracks the loading state of the app
  const [tours, setTours] = useState([]); // Stores the list of tours fetched from the API

  // Function to remove a specific tour from the list
  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id); // Filter out the tour with the given id
    setTours(newTours); // Update the tours state
  };

  // Function to fetch tour data from the API
  const fetchTours = async () => {
    setLoading(true); // Set loading to true before fetching data
    try {
      const response = await fetch(url); // Fetch data from the API
      const tours = await response.json(); // Parse the response as JSON
      setLoading(false); // Set loading to false once data is fetched
      setTours(tours); // Update the tours state with the fetched data
    } catch (error) {
      setLoading(false); // Set loading to false in case of an error
      console.log(error); // Log the error to the console
    }
  };

  // useEffect to fetch tours when the component mounts
  useEffect(() => {
    fetchTours(); // Call the fetchTours function once when the component loads
  }, []);

  // Render loading spinner while data is being fetched
  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  // Render message and refresh button if there are no tours left
  if (tours.length === 0) {
    return (
      <main>
        <div className='title'>
          <h2>no tours left</h2>
          <button className='btn' onClick={() => fetchTours()}>
            refresh
          </button>
        </div>
      </main>
    );
  }

  // Render the Tours component if data is available
  return (
    <main>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  );
}

export default App;
