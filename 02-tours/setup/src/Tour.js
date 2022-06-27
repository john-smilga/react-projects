import React, { useState } from "react";

const Tour = ({ id, name, info, image, price, removeTour }) => {
  //in Tour component, I used destructure the props to {tour} directly

  const [readMore, setReadMore] = useState(false);
  return (
    <article className="single-tour">
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">${price}</h4>
        </div>
        <p>
          {/* use ternary operator to easily control info words and toggle button*/}
          {readMore ? info : `${info.substring(0, 200)}...`}
          <button onClick={() => setReadMore(!readMore)}>
            {readMore ? `Show less` : `Read More`}
          </button>
        </p>
        <button className="delete-btn" onClick={() => removeTour(id)}>
          Pass
        </button>
      </footer>
    </article>
  );
};

export default Tour;
