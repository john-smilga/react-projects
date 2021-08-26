import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';
function App() {
  const [questions, setQuestions] = useState(data);
  return (
    <main>
      <div className="container">
        <h3>Questions & Answers About Login</h3>
        <section>
          {
            questions.map((question) => {
              return <SingleQuestion {...question} key={question.id} />;
            })
          }
        </section>
      </div>
    </main>
  );
}

export default App;
