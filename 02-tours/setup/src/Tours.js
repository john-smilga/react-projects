import React from "react";
import Tour from "./Tour";
const Tours = ({ Tours, removeTour }) => {
  return (
    <section>
      <div className='title'>
        <h2>our Tours</h2>
        <div className='underline'></div>
      </div>
      <div>
        {Tours.map((tour) => {
          return <Tour key={tour.id} {...tour} removeTour={removeTour} />;
        })}
      </div>
    </section>
  );
};

export default Tours;
