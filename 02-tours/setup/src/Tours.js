import React from 'react';
import Tour from './Tour';
const Tours = ({tours, removeTour}) => {
  return <section>
    <div className='title'>
      <h2>Our Tours</h2>
<div className='underline'></div>
    </div>

    <div>
      {tours.map((tour)=>{
        // object spread operator - ...tour (giving access to all property in object in my tour compo)
         return <Tour key={tour.id} {...tour} removeTour={removeTour}></Tour>
        //  we can pass functions as props {removeTour}
      }
     
      )}
    </div>
  </section>;
};

export default Tours;






