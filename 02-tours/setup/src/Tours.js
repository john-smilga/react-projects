import React from "react";
import { useContext } from "react";
import Tour from "./Tour";
import { myContext } from "./App";
const Tours = () => {
  const { tours } = useContext(myContext);

  return (
    <section>
      <div className="title">
        <h2>our Tours</h2>
        <div className="underline"></div>
      </div>
      <div>
        {tours.map((tour) => {
          const { id } = tour;
          return <Tour key={id} />;
        })}
      </div>
    </section>
  );
};

export default Tours;
