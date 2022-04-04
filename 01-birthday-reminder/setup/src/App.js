import React, { useState, useEffect } from 'react';
import data from './data';
import List from './List';
function App() {
  const [people, setPeople] = useState(data);
  const removePerson = id => {
    setPeople(oldPeople => {
      const newPeople = oldPeople.filter(person => person.id !== id);
      return newPeople;
    });
  };

  return (
    <main>
      <section className="container">
        <h3>{people.length} birthdays</h3>
        <List people={people} removePerson={removePerson}></List>
        <button onClick={() => setPeople([])}>Clear All</button>
      </section>
    </main>
  );
}

export default App;
