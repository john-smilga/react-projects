import React, { useState } from "react";
import { useContext } from "react";
import { myContext } from "./App";

const Tour = () => {
  const { tours, Removetour } = useContext(myContext);
  console.log(`this is my ${tours.map((tour) => tour.price)}`);
  const [readMore, setreadMore] = useState(false);
  const handleMore = () => {
    setreadMore(!readMore);
  };

  return (
    <article className="single-tour">
      {tours.map((tour) => {
        return (
          <div key={tour.id}>
            <img src={tour.image} alt={tour.name} />
            <footer>
              <div className="tour-info">
                <h4>{tour.name}</h4>
                <h4 className="tour-price">${tour.price}</h4>
              </div>
              <p>
                {readMore ? tour.info : `${tour.info.substring(0, 200)}...`}
                <button onClick={handleMore}>
                  {readMore ? (
                    <span style={{ color: "red" }}>Show Less</span>
                  ) : (
                    <span style={{ color: "green" }}>Show More</span>
                  )}
                </button>
              </p>
              <button
                className="delete-btn"
                onClick={() => Removetour(tour.id)}
              >
                not interested
              </button>
            </footer>
          </div>
        );
      })}
    </article>
  );
};

export default Tour;
