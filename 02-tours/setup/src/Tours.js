import React from 'react';
import Tour from './Tour';


const Tours = ({ tours, handleRemoveTour }) => {
  return (
    <section>
      <div className="title">
        <h2> Our Tours </h2>
        <div className="underline"></div>
      </div>
      <div>
        {
          tours.map((tour) => {
            return (
              < Tour key={tour.id} {...tour} handleRemoveTour={handleRemoveTour} />
            );
          }
          )
        }
      </div>
      {/* {tours || <h2>No Tours left</h2>} */}
    </section>
  );
  // return <h2>tours component</h2>;
};

export default Tours;
