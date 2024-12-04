// Import the React library to use its functionalities for building UI components
import React from 'react'; 

// Import the ReactDOM library for rendering React elements into the DOM
import ReactDOM from 'react-dom/client';

// Import the global CSS file for styling the application
import './index.css'; 

// Import the main App component, which serves as the root component for the application
import App from './App'; 

// Create a root object to target the HTML element with the id 'root' for rendering
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component within the root element inside React's StrictMode
root.render(
  <React.StrictMode>
    <App /> {/* The main application component */}
  </React.StrictMode>
);
