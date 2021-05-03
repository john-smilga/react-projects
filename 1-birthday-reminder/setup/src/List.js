import React from 'react';

const List = ({people, removeBirthday}) => {
  return (
    <>
      {people.map((person)=> {
        const {id, name, age, image} = person;
        return (
          <article key={id} className="person">
            <img src={image} alt={name}/>
            <div>
              <h4>{name}<button className="removal-btn" onClick={() => removeBirthday(id)}>X</button></h4>
              <age>{age} years old</age>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default List;
