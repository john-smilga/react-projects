import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {
  return <main>
    <section className="container">
      <h3>0 birthdays today</h3>
      <List />
      <button onClick={()=> console.log('ai dat click')}>
        clear all
      </button>
    </section>
  </main>;
}

export default App;
