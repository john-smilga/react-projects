import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = ({title, info}) => {
  const [showinfo, setShowinfo] = useState(false)
  return(
    <article className='question'>
        <header>
        <h3>{title}</h3>
        <button className='btn' onClick={()=>setShowinfo(!showinfo)}>{
          showinfo ? <AiOutlineMinus/> : <AiOutlinePlus/>
        }</button>
        </header>
        {
          showinfo && <p>{info}</p>
        }
    </article>
  );
};

export default Question;
