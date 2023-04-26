import React from "react";

const List = ({ people }) => {
  return (
    <>
      {people.map((people) => {
        const { id, name, image, age } = people;
        return (
          <article key={id} className="person">
            <img src={image} alt={name} />
            <div>
              <h3> {name} </h3>
              <p> {age} </p>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default List;
