import React from 'react'
import { useGlobalContext } from './context'

const SetupForm = () => {
  // Destructure values from the global context
  const { quiz, handleChange, handleSubmit, error } = useGlobalContext()

  return (
    <main>
      <section className='quiz quiz-small'>
        {/* Form for setting up the quiz */}
        <form className='setup-form'>
          <h2>setup quiz</h2>
          
          {/* Input for specifying the number of questions */}
          <div className='form-control'>
            <label htmlFor='amount'>number of questions</label>
            <input
              type='number'
              name='amount' // Field name for handling state updates
              id='amount'   // Unique identifier for the input
              value={quiz.amount} // Controlled input value from the context state
              onChange={handleChange} // Function to handle changes in the input
              className='form-input'
              min={1} // Minimum value allowed
              max={50} // Maximum value allowed
            />
          </div>

          {/* Dropdown to select the quiz category */}
          <div className='form-control'>
            <label htmlFor='category'>category</label>
            <select
              name='category' // Field name for handling state updates
              id='category'   // Unique identifier for the select element
              className='form-input'
              value={quiz.category} // Controlled value from the context state
              onChange={handleChange} // Function to handle selection changes
            >
              <option value='sports'>sports</option>
              <option value='history'>history</option>
              <option value='politics'>politics</option>
            </select>
          </div>

          {/* Dropdown to select the quiz difficulty */}
          <div className='form-control'>
            <label htmlFor='difficulty'>select difficulty</label>
            <select
              name='difficulty' // Field name for handling state updates
              id='difficulty'   // Unique identifier for the select element
              className='form-input'
              value={quiz.difficulty} // Controlled value from the context state
              onChange={handleChange} // Function to handle selection changes
            >
              <option value='easy'>easy</option>
              <option value='medium'>medium</option>
              <option value='hard'>hard</option>
            </select>
          </div>

          {/* Error message displayed if there is an issue generating questions */}
          {error && (
            <p className='error'>
              can't generate questions, please try different options
            </p>
          )}

          {/* Button to submit the quiz setup form */}
          <button 
            type='submit' 
            onClick={handleSubmit} // Function to handle form submission
            className='submit-btn'
          >
            start
          </button>
        </form>
      </section>
    </main>
  )
}

export default SetupForm
