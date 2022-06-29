import React, { useState } from "react";
import SingleColor from "./SingleColor"; //SingleColor component
import Values from "values.js";

function App() {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Values("#18978F").all(10));

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      setError(false);
      let colors = new Values(color).all(10);
      setList(colors);
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };
  return (
    <>
      {/* part I */}
      <section className="container">
        <h3>Color Finder</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={color}
            name="name"
            onChange={(e) => setColor(e.target.value)}
            placeholder="#18978F"
            className={`${error && "error"}`}
          />
          <button className="btn">find</button>
        </form>
      </section>

      {/* part II */}
      <section className="colors">
        {list.map((color, index) => (
          <SingleColor
            key={index}
            {...color}
            index={index}
            hexColor={color.hex}
          />
          // eg: ...color => {rgb: Array(3), alpha: 1, type: 'tint', weight: 100} comes from values.js
        ))}
      </section>
    </>
  );
}

export default App;
