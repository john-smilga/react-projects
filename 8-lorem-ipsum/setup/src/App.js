import React, { useState } from 'react';
import data from './data';
function App() {
  const [count,setCount] = useState(0);

  const [text, setText] = useState([]);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // worth noting: we have a gotcha here where we are expecting a number but get a string instead
    let amount = parseInt(count);
    console.log(typeof count, " ", count);
    console.log(typeof amount, " ", amount);

    if(count <= 0) {
      amount = 0;
    }
    if(count > 100) {
      amount = 100;
    }
    setText(data.slice(0,amount));
  }

  return (
  <section className="section-center">
    <h3>Tired of boring lorem ipsum?</h3>
    <form action="" className="lorem-form" onSubmit={handleSubmit}>
      <label htmlFor="amount" className="">Paragraphs</label>
      <input type="number" name="amount" id="amount" min="0" max="100" value={count} onChange={(e)=>parseInt(setCount(e.target.value))}/>
      <button type="submit" className="btn">Generate</button>
    </form>
    <article className="lorem-text">
      {text.map((item, index) => {
        return <p key={index}>{item}</p>
      })}
    </article>
  </section>
  )
}

export default App;