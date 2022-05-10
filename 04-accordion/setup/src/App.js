import React from "react";
import data from "./data";
import Question from "./Question";

function App() {
  return (
    <main>
      <div className="container">
        <h3>questions and answer about login</h3>
        <section className="info">
          {data.map((question) => {
            return (
              <Question
                key={question.id}
                title={question.title}
                info={question.info}
              />
            );
          })}
        </section>
      </div>
    </main>
  );
}

export default App;
