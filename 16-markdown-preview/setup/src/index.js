// Importing the React library, which is essential for building React components
import React from 'react';

// Importing the ReactDOM library, which is used to render React components to the DOM
import ReactDOM from 'react-dom/client';

// Importing the CSS file to apply global styles to the application
import './index.css';

// Importing the main App component, which serves as the root component of the application
import App from './App';

// Creating the root element for rendering the React application
// This refers to the 'root' div in the HTML file
const root = ReactDOM.createRoot(document.getElementById('root'));

// Rendering the application using the root element
// Wrapping <App /> with <React.StrictMode> to highlight potential problems in the application during development
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
