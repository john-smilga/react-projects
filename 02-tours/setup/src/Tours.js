import React from "react";
import Tour from "./Tour";
const Tours = ({ tours, removeTour }) => {
  return (
    <section>
      <div className="title">
        <h2>tours project</h2>
        <div className="underline"></div>
      </div>
      <div>
        {tours.map(
          (tour) => (
            <Tour key={tour.id} {...tour} removeTour={removeTour} />
          )
          // console.log(tour)
        )}
      </div>
    </section>
  );
};

export default Tours;
