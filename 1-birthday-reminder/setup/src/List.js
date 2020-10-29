import React from 'react';

const List = ({ people }) => {
  return (
    <ul>
      {people.map((person) => {
        return (
          <article id={person.id} className="person">
            <img src={person.image} alt={person.name} />
            <div>
              <h4>{person.name}</h4>
              <p>{person.age} years</p>
            </div>
          </article>
        );
      })}
    </ul>
  );
};

export default List;
