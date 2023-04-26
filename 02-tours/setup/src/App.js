import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tours-project";
function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  function filterTours(id) {
    const newTour = tours.filter((tours) => tours.id !== id);
    setTours(newTour);
  }

  const fetchTours = async () => {
    setLoading(true);

    try {
      const response = await fetch(url);
      const tours = await response.json();
      setLoading(false);
      setTours(tours);
    } catch (error) {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);

  if (loading == true) {
    return (
      <main>
        <Loading />
      </main>
    );
  }
  if(tours.length == 0) {
    return (
      <main>
        <div className="title">
                <h3> no tours left </h3>
                <button className='btn' onClick={() => fetchTours()}> reset</button>
              </div>
        </main>
    )
  }

  return (
    <main>
      <h2 className="title">
        Our Tours
        <div className="underline"> </div>
      </h2>
      <Tours tours={tours} filterTours={filterTours} />
    </main>
  );
}

export default App;
