import React from "react";

const List = ({ people }) => {
  return (
    <>
      {people.map((person) => (
        <article key={person.id} className="person">
          <img src={person.image} alt={person.name} className="img" />
          <div>
            <h4 className="h4">{person.name}</h4>
            <p className="p">Age: {person.age}</p>
          </div>
        </article>
      ))}
    </>
  );
};

export default List;
