// Importing the React library to create React components
import React from 'react';

// Importing ReactDOM for rendering React components to the DOM
import ReactDOM from 'react-dom/client';

// Importing the global CSS file for styling
import './index.css';

// Importing the main App component
import App from './App';

// Importing the AppProvider component to manage global state using context
import { AppProvider } from './context';

// Creating the root element for rendering the React application
const root = ReactDOM.createRoot(document.getElementById('root'));

// Rendering the application within the React.StrictMode for highlighting potential issues
root.render(
  <React.StrictMode>
    {/* Wrapping the App component with AppProvider for providing context to the entire app */}
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>
);
