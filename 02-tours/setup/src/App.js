import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tours-project";
function App() {
  // init state
  const [tourData, setTourData] = useState([]);
  const [isLoading, setLoading] = useState(false);
  // init func
  const fetchTour = async (url) => {
    setLoading(true);
    try {
      const res = await fetch(url);
      const tour = await res.json();
      setLoading(false);
      setTourData(tour);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  const removeTour = (id) => {
    let filterTour = tourData.filter((tour) => tour.id !== id);
    setTourData(filterTour);
  };
  // fetch api
  useEffect(() => {
    fetchTour(url);
  }, []);
  // useEffect(() => {
  //   removeTour("rec6d6T3q5EBIdCfD");
  // }, [tourData]);
  return (
    <>
      {isLoading ? (
        <main>
          <Loading />
        </main>
      ) : (
        <main>
          <Tours tours={tourData} removeTour={removeTour} />
        </main>
      )}
    </>
  );
}

export default App;
