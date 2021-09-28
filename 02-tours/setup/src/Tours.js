import React from "react";
import Tour from "./Tour";
const Tours = ({ tours }) => {
  return (
    <>
      {tours.map(
        (tour) => (
          <Tour key={tour.id} {...tour} />
        )
        // console.log(tour)
      )}
    </>
  );
};

export default Tours;
