import React, { useState, useEffect } from "react";
import Loading from "./Loading"; //loading component
import Tours from "./Tours";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tours-project";
function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [tours, setTours] = useState([]);

  //because tours state in App component, we need removeTour in here
  // and then we pass the function down to child component.
  //Therefore, at this stage, I use props drilling(which is not good in complex projects!)
  //After that, I will use context API to handle props drilling
  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };
  //fetch tours api
  const fetchTours = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      setIsLoading(false); //after catch data, then set loading state to false
      setTours(data); //and set tours state to new data
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };
  //use useEffect to handle fetch api just once
  useEffect(() => {
    fetchTours();
  }, []);

  if (isLoading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }
  // if (tours.length === 0) {
  //   return (
  //     <main>
  //       <div className="title">
  //         <h2>No tours left</h2>
  //         <button className="btn" type="button" onClick={fetchTours}>
  //           Refresh
  //         </button>
  //       </div>
  //     </main>
  //   );
  // }
  // As we can see above is another way to use different condition to return different JSX
  //below way is more DRY as we do need to use <main> tag again
  return (
    <main>
      {tours.length ? (
        <Tours tours={tours} removeTour={removeTour} />
      ) : (
        <div className="title">
          <h2>No tours left</h2>
          <button className="btn" type="button" onClick={fetchTours}>
            Refresh
          </button>
        </div>
      )}
    </main>
  );
}

export default App;
