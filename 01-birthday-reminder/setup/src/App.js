import React, { useState } from 'react';
import data from './data';
import List from './List';
import './App.css';

function App() {
  const [persons,setPerson] =  useState(data);
  function handleClick(){
    setPerson([]);
  }

  function delteName(key){
  const arr = persons.filter((person)=>{
    return(
        person.id!==key
    )
  })

    setPerson(arr);
  }

  return (
    <div className="container">
      <div className="card">
      <p className="list-length">{persons.length} birthday's today</p>
      {persons.map((person,i)=>{
        const name=person.name;
        const age = person.age;
        const image = person.image;
        const id = person.id;
        return (
              <List key={i+1} id={id} name={name} age={age} image={image} />
        )
      })}
      <button onClick={handleClick}>Clear All</button>
      </div>
    </div>
      
  )
}

export default App;
