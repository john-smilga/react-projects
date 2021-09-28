import React, { useState } from "react";

const Tour = ({ name, info, image, price }) => {
  const [showMore, setShowMore] = useState(false);
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
      </footer>
    </article>
  );
};

export default Tour;
