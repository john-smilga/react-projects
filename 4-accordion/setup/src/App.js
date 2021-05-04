import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';
function App() {
  console.log(data);
  const {id, title, info} = data; 

  const [questions, setQuestions] = useState(data);
  return(
    <article className="container">  
      <h3>Questions And Answers About Login</h3>
      
      <section className="info">
        {
          questions.map((question) => {
            return (
              <SingleQuestion key={question.id} {...question}/>
            )} 
          ) 
        }
      </section>
    </article>
  )
}

export default App;
