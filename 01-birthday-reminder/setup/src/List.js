import React from "react";

const List = ({ people }) => {
  return (
    <>
      {/* <h2>list component</h2> */}
      {people.map((individual) => {
        const { id, name, age, image } = individual;
        return (
          <article key={id} className="person">
            <img src={image} alt={name}></img>
            <div>
              <h4>{name}</h4>
              <p>{age} years</p>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default List;
