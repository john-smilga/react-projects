import React, { useState } from "react";
import data from "./data";
import List from "./List";
function App() {
  const [check, setcheck] = useState(false);
  const [people, setpeople] = useState(data);
  if (people.length === 0) {
    return (
      <main>
        <section className="container">
          <button onClick={() => setpeople(data)}>restore</button>
        </section>
      </main>
    );
  }
  return (
    <main>
      <section className="container">
        <h3>{people.length} birthdays today</h3>
        <List people={people} />
        <button onClick={() => setpeople([])}>clear all </button>
      </section>
    </main>
  );
}

export default App;
