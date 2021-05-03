import React, { useState } from 'react';

const Tour = ({id, image, info, price, name}) => {
  return (
    <section className="single-tour">
      <img src={image} alt={name}/>
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">{price}</h4>
        </div>
        <p>{info}</p>
        <button className="delete-btn">Not Interested</button>
      </footer>
    </section>
  )
}

export default Tour;
