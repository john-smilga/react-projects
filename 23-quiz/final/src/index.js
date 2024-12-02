// Importing React library for creating components
import React from 'react';

// Importing ReactDOM to handle rendering React components to the DOM
import ReactDOM from 'react-dom/client';

// Importing the CSS file for styling the application
import './index.css';

// Importing the main App component
import App from './App';

// Importing AppProvider, which provides global context to the application
import { AppProvider } from './context';

// Creating a root DOM node where the React application will be rendered
const root = ReactDOM.createRoot(document.getElementById('root'));

// Rendering the React application to the root element
root.render(
  <React.StrictMode> {/* Enables additional checks and warnings in development mode */}
    <AppProvider>    {/* Wrapping the App component with AppProvider to enable global state management */}
      <App />         {/* Rendering the main App component */}
    </AppProvider>
  </React.StrictMode>
);
