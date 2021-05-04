import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = ({id, title, info}) => {
  
  const [seeMore, setSeeMore] = useState(false);

  return (
    <article className="question">
      <header>
        <h4>{title}</h4>  
        <button className="btn" onClick={()=> setSeeMore(!seeMore)}>
          {seeMore ? <AiOutlineMinus/> : <AiOutlinePlus/>}
        </button>
      </header>
        {/* <p>{seeMore ? info : ""}</p> */}
        {seeMore && <p>{info}</p>}
        
        {/* today I learned that the && operator works for display element when it's truthy */}
        {/* no need to write the ternary with a blank string */}
    </article>
  );
};

export default Question;
