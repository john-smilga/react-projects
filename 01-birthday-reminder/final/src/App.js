import React, { useState } from 'react';
import data from './writers-array.json';
import List from './List';

function App() {
  const [people, setPeople] = useState(data);
  return (
    <main>
      <div></div>
      <section className="container">
        <h3>{people.length} writer's birthday</h3>
        <List people={people} />
        <button onClick={() => setPeople([])}>clear all</button>
      </section>
    </main>
  );
}

export default App;
