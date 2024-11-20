// Import React library for creating components
import React from 'react'

// Import FaTimes icon from react-icons library for the close button
import { FaTimes } from 'react-icons/fa'

// Import the custom hook to access global context
import { useGlobalContext } from './context'

// Import sublinks data
import sublinks from './data'

// Define the Sidebar component
const Sidebar = () => {
  // Destructure `isSidebarOpen` and `closeSidebar` from global context
  const { isSidebarOpen, closeSidebar } = useGlobalContext()

  // Return the JSX for the Sidebar
  return (
    <div
      // Dynamically assign class based on `isSidebarOpen` to show or hide the sidebar
      className={`${
        isSidebarOpen ? 'sidebar-wrapper show' : 'sidebar-wrapper'
      }`}
    >
      {/* Sidebar container */}
      <aside className='sidebar'>
        {/* Close button for the sidebar */}
        <button className='close-btn' onClick={closeSidebar}>
          <FaTimes /> {/* Render the close icon */}
        </button>

        {/* Sidebar links section */}
        <div className='sidebar-links'>
          {/* Map through the sublinks data to generate sidebar content */}
          {sublinks.map((item, index) => {
            const { links, page } = item // Destructure `links` and `page` from each sublink item
            return (
              // Render an article for each page
              <article key={index}>
                <h4>{page}</h4> {/* Render the page title */}
                <div className='sidebar-sublinks'>
                  {/* Map through the links of each page */}
                  {links.map((link, index) => {
                    const { url, icon, label } = link // Destructure link properties
                    return (
                      // Render an anchor tag for each link
                      <a key={index} href={url}>
                        {icon} {/* Render the link icon */}
                        {label} {/* Render the link label */}
                      </a>
                    )
                  })}
                </div>
              </article>
            )
          })}
        </div>
      </aside>
    </div>
  )
}

// Export the Sidebar component
export default Sidebar
