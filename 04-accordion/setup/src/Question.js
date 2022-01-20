import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = ({ title, info }) => {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <article className="question">
      <header>
        <h4>{title}</h4>

        {/* Whatever is the value of showInfo, set the opposite: */}
        <button className="btn" onClick={() => setShowInfo(!showInfo)}>
          {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {/* If showInfo is true, then show my paragraph. It's false by default */}
      {showInfo && <p>{info}</p>}
    </article>
  );
};

export default Question;
