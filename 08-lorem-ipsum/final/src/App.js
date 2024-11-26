// Import React and the useState hook for state management
import React, { useState } from 'react';

// Importing the data array which contains the paragraphs to be displayed
import data from './data';

function App() {
  // State to keep track of the number of paragraphs to generate
  const [count, setCount] = useState(0);

  // State to store the paragraphs to display
  const [text, setText] = useState([]);

  // Event handler for the form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the form from refreshing the page

    // Convert the count input value to an integer
    let amount = parseInt(count);

    // Ensure the count is at least 1 and at most 8
    if (count <= 0) {
      amount = 1;
    }
    if (count > 8) {
      amount = 8;
    }

    // Update the text state with the sliced data array based on the amount
    setText(data.slice(0, amount));
  };

  return (
    <section className='section-center'>
      <h3>tired of boring lorem ipsum?</h3>
      {/* Form for selecting the number of paragraphs */}
      <form className='lorem-form' onSubmit={handleSubmit}>
        <label htmlFor='amount'>paragraphs:</label>
        {/* Input for the number of paragraphs */}
        <input
          type='number'
          name='amount'
          id='amount'
          value={count}
          onChange={(e) => setCount(e.target.value)} // Update count state on input change
        />
        <button className='btn'>generate</button>
      </form>

      {/* Display the generated paragraphs */}
      <article className='lorem-text'>
        {text.map((item, index) => {
          // Render each paragraph in a <p> tag with a unique key
          return <p key={index}>{item}</p>;
        })}
      </article>
    </section>
  );
}

export default App;
