import React, { useState } from "react";
import data from "./data";
function App() {
  const [text, setText] = useState([]);
  const [num, setNum] = useState(0);

  const submitHandler = (e) => {
    e.preventDefault();
    let amount = num;
    if (num <= 0) {
      amount = 1;
    }
    if (num > 8) {
      amount = 8;
    }
    setText(data.slice(0, amount));
  };

  const inputHandler = (e) => {
    const newNum = parseInt(e.target.value); //html input num original type is string as well,that's why we need parseInt
    return setNum(newNum);
  };
  return (
    <section className="section-center">
      <h3>tired of boring lorem ipsum?</h3>
      <form className="lorem-form" onSubmit={submitHandler}>
        <label htmlFor="amount">paragraphs:</label>
        <input
          type="number"
          name="amount"
          id="amount"
          value={num}
          onChange={inputHandler}
        />
        <button className="btn">generate</button>
      </form>
      <article className="lorem-text">
        {text.map((sentence, index) => (
          <p key={index}> {sentence}</p>
        ))}
      </article>
    </section>
  );
}

export default App;
