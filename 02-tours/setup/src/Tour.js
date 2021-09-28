import React, { useState } from "react";

const Tour = ({ name, info, image, price }) => {
  return (
    <article className="single-tour">
      <img src={image} alt="" />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <div className="tour-price">${price}</div>
        </div>
        <p>{info}</p>
      </footer>
    </article>
  );
};

export default Tour;
