import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'
  

function App() {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [list, setList] = useState([]);

  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log("Hello");
  }
  return (
    <div>
      <section className="container">
        <h3>color generator</h3>
        <form action="" onSubmit={handleSubmit}>
          <input type="text" value={color} placeholder="#ff195e" onChange={(e) => setColor(e.target.value)}/>
          <button className="btn" type="submit">Submit</button>
        </form>
      </section>
      <section className="colors">
        The list of colors goes here:
      </section>
    </div>
  )
}

export default App
