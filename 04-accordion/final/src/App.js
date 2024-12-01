// Importing React and useState for component creation and state management
import React, { useState } from 'react';

// Importing the data array from an external file
import data from './data';

// Importing the SingleQuestion component to display individual questions
import SingleQuestion from './Question';

function App() {
  // Initializing state to hold the questions data
  const [questions, setQuestions] = useState(data);

  return (
    <main>
      <div className='container'>
        {/* Page heading */}
        <h3>questions and answers about login</h3>

        {/* Section to display the list of questions */}
        <section className='info'>
          {/* Mapping through the questions array to render each question */}
          {questions.map((question) => {
            return (
              // Rendering SingleQuestion component for each question with props spread
              <SingleQuestion key={question.id} {...question}></SingleQuestion>
            );
          })}
        </section>
      </div>
    </main>
  );
}

// Exporting the App component as the default export
export default App;
