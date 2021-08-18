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

  const getTours = async () => {
    setLoading(true);

    try {
      //online
      // const response = await fetch(url);
      // const tours = response.json();
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


  return (
    <main>
      {loading && <Loading />}
      {!loading && <Tours tours={tours} />}
    </main>
  );
}

export default App
