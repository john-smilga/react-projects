import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
const Question = (props) => {
  const [showAnswer, setShowAnswer] = useState(false);

  function handleAnswer() {
    setShowAnswer((prevValue) => {
      return !prevValue;
    });
  }

  return (
    <article className="question">
      <header>
        <h4>{props.title}</h4>
        <button className="btn" onClick={handleAnswer}>
          {showAnswer ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      <p>{showAnswer ? props.info : null}</p>
    </article>
  );
};

export default Question;
