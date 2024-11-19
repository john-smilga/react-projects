// Import necessary modules and components
import React, { useState, useEffect } from 'react'; // React hooks for managing state and side effects
import data from './data'; // Importing data for articles
import Article from './Article'; // Importing the Article component

// Function to get the current theme from localStorage or default to 'light-theme'
const getStorageTheme = () => {
  let theme = 'light-theme'; // Default theme
  if (localStorage.getItem('theme')) {
    theme = localStorage.getItem('theme'); // Retrieve the stored theme if it exists
  }
  return theme; // Return the theme
};

function App() {
  // State variable to track the current theme, initialized using getStorageTheme
  const [theme, setTheme] = useState(getStorageTheme());

  // Function to toggle the theme between 'light-theme' and 'dark-theme'
  const toggleTheme = () => {
    if (theme === 'light-theme') {
      setTheme('dark-theme'); // Switch to dark theme
    } else {
      setTheme('light-theme'); // Switch to light theme
    }
  };

  // useEffect hook to apply the current theme and save it in localStorage whenever it changes
  useEffect(() => {
    document.documentElement.className = theme; // Set the theme class on the root element
    localStorage.setItem('theme', theme); // Save the current theme in localStorage
  }, [theme]); // Dependency array to re-run the effect whenever 'theme' changes

  return (
    <main>
      {/* Navigation bar with a toggle button */}
      <nav>
        <div className="nav-center">
          <h1>overreacted</h1> {/* Website title */}
          <button className="btn" onClick={toggleTheme}>
            toggle {/* Button to toggle the theme */}
          </button>
        </div>
      </nav>
      {/* Section displaying a list of articles */}
      <section className="articles">
        {data.map((item) => {
          // Map through the articles data and render an Article component for each item
          return <Article key={item.id} {...item} />; // Spread the article properties as props
        })}
      </section>
    </main>
  );
}

export default App; // Export the App component as default
