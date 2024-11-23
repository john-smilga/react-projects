// Import React and useState for component creation and state management
import React, { useState } from 'react';

// Import ReactMarkdown for rendering Markdown syntax as HTML
import ReactMarkdown from 'react-markdown';

function App() {
  // useState hook to manage the markdown text entered by the user
  // Initial value is set to a sample markdown string
  const [markdown, setMarkdown] = useState('# markdown preview');

  return (
    // Main wrapper for the application
    <main>
      {/* Section to organize the input and preview areas */}
      <section className='markdown'>
        {/* Textarea for user input */}
        {/* className 'input' is for styling purposes */}
        {/* value is bound to the markdown state */}
        {/* onChange updates the markdown state as the user types */}
        <textarea
          className='input'
          value={markdown}
          onChange={(e) => setMarkdown(e.target.value)}
        ></textarea>
        
        {/* Article to display the rendered Markdown */}
        {/* className 'result' is for styling purposes */}
        {/* ReactMarkdown component renders the Markdown input as HTML */}
        <article className='result'>
          <ReactMarkdown>{markdown}</ReactMarkdown>
        </article>
      </section>
    </main>
  );
}

// Export the App component as the default export
export default App;
