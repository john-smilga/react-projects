import React, { useState } from "react";
import data from "./data";
import List from "./List";
function App() {
  const [people, Setpeople] = useState(data);

  const clearHandler = () => Setpeople([]);

  return (
    <main>
      <section className="container">
        <h3 className="h3">{people.length} birthday today</h3>
        {/* first solution */}
        {/* {people.map((person) => (
          <List key={person.id} person={person} />
        ))} */}

        {/* second solution */}
        <List people={people} />
        <button type="button" className="button" onClick={clearHandler}>
          Clear
        </button>
      </section>
    </main>
  );
}

export default App;
