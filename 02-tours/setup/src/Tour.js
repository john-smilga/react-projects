import React, { useState } from 'react';

const Tour = ({ tour }) => {
  const { id, image, name, info, price } = tour;
  console.log('id :>> ', id);
  return (
    <>
      <section key={id} className="single-tour">
        <img src={image} alt={name} />
        <div className="tour-info">
          <h4 className="title">{name}</h4>
          <span className="price">{price}</span>
        </div>
      </section>
    </>
  );
};

export default Tour;
