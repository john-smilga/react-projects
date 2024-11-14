import React, { useState, useRef, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import { links, social } from './data';
import logo from './logo.svg';

/**
 * Navbar component displays a responsive navigation bar.
 * It includes a logo, links to different pages, and social media icons.
 * The component handles the toggle behavior for showing/hiding links.
 */
const Navbar = () => {
  // State to track the visibility of links in mobile view
  const [showLinks, setShowLinks] = useState(false);

  // Refs to track the container and the list of links for dynamic styling
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  /**
   * Toggles the visibility of the links by updating `showLinks` state.
   */
  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  // Define dynamic height style based on `showLinks` state
  const linkStyles = {
    height: showLinks
      ? `${linksRef.current.getBoundingClientRect().height}px`
      : '0px',
  };

  return (
    <nav>
      <div className='nav-center'>
        {/* Header section containing logo and toggle button */}
        <div className='nav-header'>
          <img src={logo} className='logo' alt='logo' />
          {/* Button to toggle visibility of links in smaller screens */}
          <button className='nav-toggle' onClick={toggleLinks}>
            <FaBars />
          </button>
        </div>

        {/* Links container: dynamically adjusted height based on `showLinks` */}
        <div
          className='links-container'
          ref={linksContainerRef}
          style={linkStyles}
        >
          {/* List of navigational links */}
          <ul className='links' ref={linksRef}>
            {links.map((link) => {
              const { id, url, text } = link;
              return (
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              );
            })}
          </ul>
        </div>

        {/* List of social media icons */}
        <ul className='social-icons'>
          {social.map((socialIcon) => {
            const { id, url, icon } = socialIcon;
            return (
              <li key={id}>
                <a href={url}>{icon}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
