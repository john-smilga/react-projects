import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
import data from './data';
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'
function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  }


  const getTours = async () => {
    setLoading(true);

    try {
      //online
      //const response = await fetch(url);
      //const tours = await response.json();
      //offline
      const tours = data;
      setLoading(false);
      setTours(tours);
    } catch (error) {
      setLoading(false);
      console.log('error :>> ', error);
    }
  }

  useEffect(() => {
    getTours();
  }, [])


  if (tours.length === 0) {
    return (
      <main>
        <div className="title">
          <h2>No tours left</h2>
          <button className="btn" onClick={getTours}>Refresh</button>
        </div>
      </main>
    );
  }
  return (
    <main>
      {loading && <Loading />}
      {!loading && <Tours tours={tours} handleRemoveTour={removeTour} />}
    </main>
  );
}

export default App
