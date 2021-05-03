import React from 'react';
import Tour from './Tour';
const Tours = ({tours, removeTour}) => {
  // remember curly braces and destructuring
  // https://medium.com/@lcriswell/destructuring-props-in-react-b1c295005ce0
  // ^ on why this is useful and makes writing props more human readable and its applicability in React
  return (
    <section>
      <div className="title">
        <h2> Our Tours</h2>
        <div className="underline"></div>
      </div>
      <div> 
        {tours.map((tour) =>{
            return <Tour key={tour.id} {...tour} removeTour={removeTour}></Tour>
          }
        )}
      </div>
    </section>
  )
};

export default Tours;
