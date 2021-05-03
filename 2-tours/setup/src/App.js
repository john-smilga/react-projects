import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'
function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  // function for tour removal should be on the App level because that's where we'll have the data, but we'll call the function on each individual tour
  // so we'll need to pass the tour removal function down to the tour component level (which is why we destructured, because we'll need the individual id from tour.id)

  const removeTour = (id) => {
    // as a parameter, we pass in id
    // use filter method to keep all of the tours that do not have the id of the tour that we've selected to remove
    // newTours is the array of the remaining tours other than the tour to be removed
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);

    // at this point, after writing the method, the question is: how will you bring it to the individual tour level so that you can apply it to the individual tour.id? that's where the button for "Not Interested" is located
    // so, we pass it as a prop
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
      console.log(error);
    }
    
  };

  useEffect(()=> {
    fetchTours();
  }, []);

  if(loading) {
    return (
      <main>
        <Loading/>
      </main>
    );
  }
  if(tours.length === 0) {
    return(
      <main>
        <div className="title">
          <h2>No tours to display.</h2>
          <button className="btn" onClick={()=> fetchTours()}>Refresh</button>
          {/* alternatively can setup as a reference onClick={fetchTours} */}
        </div>
      </main>
    )
  }
  return (
  <main>
    <Tours tours={tours} removeTour={removeTour}/>
  </main>
  )
}

export default App
