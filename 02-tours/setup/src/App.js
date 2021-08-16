import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tours-project";
function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const removeTour = (id) => {
    const NewTours = tours.filter((tour) => tour.id !== id);
    setTours(NewTours);
  };
  const FetchTours = async () => {
    setLoading(true);
    try {
      const response = await fetch(url)
      const Tours = await response.json()
      setLoading(false);
      setTours(Tours);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  useEffect(() => {
    FetchTours();
  }, []);
  if (loading) {
    return (
      <main>
        <Loading></Loading>
      </main>
    );
  }
  if (tours.length === 0) {
    return (
      <main>
        <div className='title'>
          <h2>no tours left</h2>
        </div>
        <button className='btn' onClick={FetchTours}>
          refresh
        </button>
      </main>
    );
  }
  return (
    <main>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  );
}

export default App;
