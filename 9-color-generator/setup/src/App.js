import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'
  

function App() {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Values("#FF195E").all(5));

  // console.log(color);

  const handleSubmit = (e) =>{
    e.preventDefault();
    // let colors = new Values(color).all(10);
    // console.log(colors);
    try {
      let colors = new Values(color).all(5);
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
        <div className="title-box">
          <h3>color generator</h3>
          <p className="mini-text">Click to copy colors!</p>
        </div>
        <form action="" onSubmit={handleSubmit}>
          <input className={`${error ? "error" : null}`} type="text" value={color} placeholder="#FF195E" onChange={(e) => setColor(e.target.value)}/>
          <button className="btn" style={color ? {backgroundColor: `${color}`} : null} type="submit">Submit</button>
          <span className={`${error ? "error" : null}`}>{error ? " Valid hex codes only!" : "" }</span>
        </form>
      </section>
      <section className="colors">
        {list.map((color, index)=>{
          // console.log(color);
          const hexColor = color.hex.toUpperCase();
          // console.log(hexColor);
          return <SingleColor key={index} {...color} index={index} hexColor={hexColor} />
        })}
      </section>
    </div>
  )
}

export default App
