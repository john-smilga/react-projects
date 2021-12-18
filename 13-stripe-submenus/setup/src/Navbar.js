import React, { useState } from "react";
import logo from "./images/logo.svg";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "./context";

const Navbar = () => {
  const { openSubmenu, closeSubmenu } = useGlobalContext();
  // console.log("🚀TCL: ~ file: Navbar.js ~ line 8 ~ Navbar ~ data", data);
  return (
    <nav className='nav '>
      <div className='nav-center'>
        <div className='nav-header'>
          <img src={logo} alt='Stripe' />
        </div>
        <ul className='nav-links'>
          <li
            className='link-btn'
            onMouseEnter={openSubmenu}
            // onMouseEnter={() => console.log("cuoc song ma")}
            onMouseLeave={closeSubmenu}
          >
            Products
          </li>
          <li className='link-btn'>Developer</li>
          <li className='link-btn'>Company</li>
        </ul>
        <div className=''>
          <button className='btn signin-btn'>Sign in</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
