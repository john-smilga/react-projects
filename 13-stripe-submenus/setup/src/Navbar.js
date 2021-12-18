import React from "react";
import logo from "./images/logo.svg";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className='nav '>
      <div className='nav-center'>
        <div className='nav-header'>
          <img src={logo} alt='Stripe' srcset='' />
        </div>
        <ul className='nav-links'>
          <li className='link-btn'>Products</li>
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
