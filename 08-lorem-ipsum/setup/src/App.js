import React, { useState } from 'react';
import data from './data';
function App() {

  const [text, setText] = useState([]);
  const [count, setCount] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    let rand = count <= 8 ? count : 8;
        rand = count < -1 ? 1  : count ;
    setText(data.slice(0 , rand));
  }
  return (
    <section className="section-center">
      <h3>Tired of Boring Lorem IPsum</h3>
      <form onSubmit={handleSubmit} className="lorem-form">
        <div className="form-control">
          <label htmlFor="par">Paragraphs: </label>
          <input
            type="number"
            id="par"
            name="par"
            className="form-input"
            value={count}
            onChange={(e) => setCount(e.target.value)}
          />
          <button type="submit" className="btn">Generate</button>
        </div>
      </form>
      <article className="text">
        {text.map((item, index) => {
          return <p key={index}>{item}</p>
        })}
      </article>
    </section>
  )
}

export default App;
