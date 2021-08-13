import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {
  const [people, setPeople] = useState(data);
  return (
    <main>
      <section className="container">
        <h3>{people.length} birthdays Today</h3>
        <List people={people} />
        <button className="btn" onClick={() => setPeople([])}>Clear all</button>
      </section>
    </main>
  );
}

export default App;
