import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {
  
  const [people, setPeople] = useState(data);
  
  const removeBirthday = (id) => {
    const newSetofPeople = people.filter((person) => person.id !== id);
    setPeople(newSetofPeople);
  }

  return <main>
    <section className="container">
      <h3>{people.length} birthdays today</h3>
      <List people={people} removeBirthday={removeBirthday}/>
      <button onClick={() => setPeople([])}>Clear All</button>
      <button onClick={() => setPeople(data)}>View All</button>

    </section>
  </main>
}

export default App;
