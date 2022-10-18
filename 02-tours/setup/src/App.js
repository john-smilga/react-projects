import React, { useState, useEffect } from "react";
import { createContext } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
export const myContext = createContext();

const url = "https://course-api.com/react-tours-project";
function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);
  const Removetour = (id) => {
    const remove = tours.filter((tour) => tour.id !== id);
    setTours(remove);
  };
  const fetchTours = async () => {
    setLoading(true);
    const response = await fetch(url);
    const result = await response.json();
    setLoading(false);
    setTours(result);
  };

  useEffect(() => {
    fetchTours();
  }, []);

  if (loading) {
    return (
      <div>
        <Loading />
      </div>
    );
  }
  if (tours.length === 0) {
    return (
      <main>
        <div className="title">
          <h3>No Tours Left</h3>
          <button className="btn" onClick={fetchTours}>
            refresh
          </button>
        </div>
      </main>
    );
  }

  return (
    <myContext.Provider value={{ tours, Removetour }}>
      <main>
        <Tours />
      </main>
    </myContext.Provider>
  );
}

export default App;
