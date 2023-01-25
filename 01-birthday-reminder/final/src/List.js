import React from 'react';

const List = ({ people, removeItem }) => {
  return (
    <>
      {people.map((person) => {
        const { id, name, age, image } = person;
        return (
          <article key={id} className='person'>
            <img src={image} alt={name} />
            <div>
              <h4>{name}</h4>
              <p>{age} years</p>
            </div>
            <div>
              <button className="delete" onClick={() => removeItem(id)}>
                Delete
            </button>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default List;
