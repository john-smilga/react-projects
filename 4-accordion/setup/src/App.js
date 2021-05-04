import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';
function App() {
  console.log(data);
  const {id, title, info} = data; 

  return(
    <article className="container">  
      <h2>Questions And Answers About Login</h2>
      <SingleQuestion data={data} />
    </article>
  )
}

export default App;
