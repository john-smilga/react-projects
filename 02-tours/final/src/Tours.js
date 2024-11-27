import React from 'react'; // Importing React library
import Tour from './Tour'; // Importing the Tour component

// Tours component receives a list of tours and a function to remove a tour as props
const Tours = ({ tours, removeTour }) => {
  return (
    <section>
      {/* Section header */}
      <div className="title">
        <h2>our tours</h2>
        <div className="underline"></div> {/* Decorative underline */}
      </div>
      <div>
        {/* Iterating through the tours array and rendering a Tour component for each tour */}
        {tours.map((tour) => {
          return (
            <Tour 
              key={tour.id} // Unique key for each tour
              {...tour} // Spread operator to pass all tour properties as props
              removeTour={removeTour} // Passing the removeTour function as a prop
            />
          );
        })}
      </div>
    </section>
  );
};

export default Tours; // Exporting the Tours component
