import React from 'react';
import Tour from './Tour';


const Tours = ({ tours }) => {
  return (
    <>
      {
        tours.map((tour) => {
          return (
            <>
              < Tour key={tour.id} tour={tour} />
            </>
          );
        }
        )
      }
      {/* {tours || <h2>No Tours left</h2>} */}
    </>
  );
  // return <h2>tours component</h2>;
};

export default Tours;
