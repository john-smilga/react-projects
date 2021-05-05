import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'
  

function App() {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [list, setList] = useState([]);

  const handleSubmit = (e) =>{
    e.preventDefault();
    // let colors = new Values(color).all(10);
    // console.log(colors);
    try {
      let colors = new Values(color).all(10);
      // console.log(colors);
      setList(colors);
      setError(false);
    } catch {
      setError(true);
      console.log("Whoops! Can't do that.");
    }
  }
  return (
    <div>
      <section className="container">
        <h3>color generator</h3>
        <form action="" onSubmit={handleSubmit}>
          <input className={`${error ? "error" : null}`} type="text" value={color} placeholder="#ff195e" onChange={(e) => setColor(e.target.value)}/>
          <button className="btn" type="submit">Submit</button>
          <span className={`${error ? "error" : null}`}>{error ? " Valid hex codes only!" : "" }</span>
        </form>
      </section>
      <section className="colors">
        {list.map((color, index)=>{
          console.log(color);
          return <SingleColor key={index} {...color} index={index} />
        })}
      </section>
    </div>
  )
}

export default App
