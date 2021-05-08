import React, { useState } from "react";
import data from "./data";
import List from "./List";
function App() {
  const [people, SetPeople] = useState(data);

  return (
    <main>
      <section className='container'>
        <h3>{people.length} birthdays today</h3>
        <List people={people}></List>
        <button onClick={() => SetPeople([])}>delete items</button>
      </section>
    </main>
  );
}

export default App;
