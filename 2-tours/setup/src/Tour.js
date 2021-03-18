import React, { useState } from "react";

const Tour = ({ id, name, image, info, price, removeTour }) => {
  const [Readmore, setReadmore] = useState(false);
  // console.log(name);
  console.log(removeTour);
  return (
    <article className="single-tour">
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">${price}</h4>
        </div>
        <p>
          {Readmore ? info : `${info.substring(0, 200)}...`}
          <button onClick={() => setReadmore(!Readmore)}>
            {Readmore ? "read less" : "read more"}
          </button>
        </p>
        <button className="delete-btn" onClick={() => removeTour(id)}>
          not interested
        </button>
      </footer>
    </article>
  );
};

export default Tour;
