import React from 'react';

const List = ({people}) => {
  const {id, name, age, image}= people;
  // {
  //   people.map((person)=>{
  //     const {id, name, age, image}= person;
  //     return <List key={id} {...person}/>
  //   })
  // }

  return (
    <>
       {
    people.map((person)=>{
      const {id, name, age, image}= person;
      return <article key={id} className='person'>
          <img src={image}/>
          <div>
          <h4>{name}</h4>
          <p>{age} years</p>
          </div>
      </article>
    })
  }
    </>
  );
};

export default List;
