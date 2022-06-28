import React, { useState } from "react";
import SingleQuestion from "./SingleQuestion";
import data from "./data";
const Questions = () => {
  const [questions, setQuestions] = useState(data);

  return (
    <main>
      <div className="container">
        <h3>this is questions component</h3>
        <section className="info">
          {questions.map((question) => {
            const { id } = question;
            return <SingleQuestion key={id} {...question} />;
          })}
        </section>
      </div>
    </main>
  );
};

export default Questions;
