import React from "react";
import Tour from "./Tour";
const Tours = (props) => {
  const { tours, removeTour } = props; //props is stand for tours property from App component(parent component)

  return (
    <section>
      <div className="title">
        <h2> Tours </h2>
        <div className="underline" />
      </div>
      <div>
        {tours.map((tour) => (
          <Tour key={tour.id} {...tour} removeTour={removeTour} />
        ))}
      </div>
    </section>
  );
};

export default Tours;
