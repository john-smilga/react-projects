import React, { useState } from "react";
import data from "./data";
import List from "./List";
function App() {
  const [people, setPeople] = useState(data);

  return (
    <main>
      <section className="container">
        <h3>{people.length} birthdays today</h3>
        {people.map((person) => {
          return (
            <List
              key={person.id}
              img={person.image}
              name={person.name}
              age={person.age}
            />
          );
        })}

        <button onClick={() => setPeople([])}>Clear All</button>
      </section>
    </main>
  );
}

export default App;
