import React, { useState } from 'react';

const Tour = ({ id, image, name, info, price, handleRemoveTour }) => {
  const [readMore, setReadMore] = useState(false);
  return (
    <article key={id} className="single-tour">
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">${price}</h4>
        </div>
        <p>
          {readMore ? info : `${info.substring(0, 200)}...`}
          <button className='link' onClick={() => setReadMore(!readMore)}>{!readMore ? 'readmore' : 'show less'}</button>
        </p>
        <button className="delete-btn" onClick={() => handleRemoveTour(id)}>not interested</button>
      </footer>
    </article >
  );
};

export default Tour;
