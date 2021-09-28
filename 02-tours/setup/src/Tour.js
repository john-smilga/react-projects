import React, { useState } from "react";

const Tour = ({ id, name, info, image, price, removeTour }) => {
  const [showMore, setShowMore] = useState(false);
  const handleRemoveTour = () => {
    console.log(id, name);
  };
  return (
    <article className="single-tour">
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <div className="tour-price">${price}</div>
        </div>
        <p>
          {showMore ? info : `${info.substring(0, 200)}`}...
          <button
            onClick={() => {
              setShowMore(!showMore);
            }}
          >
            {showMore ? "read less" : "read more"}
          </button>
        </p>
        <button
          className="delete-btn"
          onClick={() => {
            removeTour(id);
          }}
        >
          Not Interesting
        </button>
      </footer>
    </article>
  );
};

export default Tour;
