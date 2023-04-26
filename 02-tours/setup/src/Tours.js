import React, { useState } from "react";
import Tour from "./Tour";
const Tours = ({ tours, filterTours }) => {
  const [readMore, setReadMore] = useState(false);

  return (
    <section>
      {tours.map((tour) => {
        const { id, name, image, info, price } = tour;
        return (
          <article className="single-tour">
            <img src={image} alt={name} />
            <footer>
              <div className="tour-info">
                <h3> {name} </h3>
                <h4 className="tour-price">{price}</h4>
              </div>
              <p>
                {readMore ? info : `${info.substring(0, 200)}...`}
                <button onClick={() => setReadMore(!readMore)}>
                  {readMore ? "show less" : "read more"}
                </button>
              </p>
              <button className="delete-btn" onClick={() => filterTours(id)}>
                not interested
              </button>
            </footer>
          </article>
        );
      })}
    </section>
  );
};

export default Tours;
