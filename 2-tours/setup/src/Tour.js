import React, { useState } from 'react';

const Tour = ({id, image, info, price, name, removeTour}) => {
  // by default, set readMore to false, so that we change it to true onClick to reveal full info
  const [readMore, setReadMore] = useState(false);
  
  return (
    <section className="single-tour">
      <img src={image} alt={name}/>
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">{price}</h4>
        </div>
        {/* <p>{info}</p> */}
        {/* to use "Read More", we need to set up conditional rendering on {info} */}
        {/* ternary is useful for this */}
        <p>
          {readMore ? info : `${info.substring(0,200)} . . .`}
          <button onClick={()=> setReadMore(!readMore)}>
          {readMore?"show less":"read more"}
        </button>
        </p> 
        
        <button 
          className="delete-btn" 
          onClick={()=> removeTour(id)}
        >
          Not Interested
        </button>
      </footer>
    </section>
  )
}

export default Tour;
