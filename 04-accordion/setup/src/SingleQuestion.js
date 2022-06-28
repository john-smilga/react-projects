import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const SingleQuestion = ({ title, info }) => {
  const [show, setShow] = useState(false);
  const showBtnHandler = () => setShow(!show); //toggle btn function
  return (
    <article className="question">
      <header>
        <h4>{title}</h4>
        {/* {show ? (
          <AiOutlineMinus className="btn" onClick={() => setShow(false)} />
        ) : (
          <AiOutlinePlus className="btn" onClick={() => setShow(true)} />
        )} */}
        {/* Not DRY as above */}
        <button className="btn" onClick={showBtnHandler}>
          {show ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {show && <p>{info}</p>}
    </article>
  );
};

export default SingleQuestion;
