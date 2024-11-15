import React, { useState } from 'react';
import data from './data'; // Importing predefined paragraph data from a separate file

function App() {
  // State to track the number of paragraphs requested
  const [count, setCount] = useState(0);
  // State to store the generated paragraphs
  const [text, setText] = useState([]);

  // Function to handle form submission and generate paragraphs
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    let amount = parseInt(count); // Convert the count input value to an integer

    // Ensure the amount is within valid bounds
    if (count <= 0) {
      amount = 1; // Default to 1 paragraph if the input is less than or equal to 0
    }
    if (count > 8) {
      amount = 8; // Limit to a maximum of 8 paragraphs
    }

    // Update the `text` state with the required number of paragraphs
    setText(data.slice(0, amount));
  };

  return (
    <section className='section-center'> {/* Main container for the app */}
      <h3>tired of boring lorem ipsum?</h3> {/* Heading */}
      
      {/* Form to input the number of paragraphs */}
      <form className='lorem-form' onSubmit={handleSubmit}>
        <label htmlFor='amount'>paragraphs:</label> {/* Input label */}
        
        {/* Input field for the number of paragraphs (controlled component) */}
        <input
          type='number'
          name='amount'
          id='amount'
          value={count}
          onChange={(e) => setCount(e.target.value)} // Update the `count` state on input change
        />
        
        <button className='btn'>generate</button> {/* Button to submit the form */}
      </form>
      
      {/* Article to display the generated paragraphs */}
      <article className='lorem-text'>
        {text.map((item, index) => {
          return <p key={index}>{item}</p>; // Render each paragraph with a unique key
        })}
      </article>
    </section>
  );
}

export default App; // Export the component as default for use in other parts of the app
