import React, { useRef, useState } from "react";
import logo from "./images/logo.svg";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "./context";

const Navbar = () => {
  const { openSubmenu, closeSubmenu, openSidebar, sublinks } =
    useGlobalContext();
  // console.log("🚀TCL: ~ file: Navbar.js ~ line 8 ~ Navbar ~ data", data);
  // const submenuRef = useRef();
  // const handleLocation = () => {
  //   const position = submenuRef.current;
  //   console.log(
  //     "🚀TCL: ~ file: Navbar.js ~ line 13 ~ handleLocation ~ position",
  //     position
  //   );
  // };
  return (
    <nav className='nav '>
      <div className='nav-center'>
        <div className='nav-header'>
          <img src={logo} alt='Stripe' />
          <button className='btn toggle-btn' onClick={openSidebar}>
            <FaBars />
          </button>
        </div>
        <ul className='nav-links'>
          {sublinks.map(({ page, index }) => {
            // return (
            //   <li
            //     ref={submenuRef}
            //     className='link-btn'
            //     key={index}
            //     // onMouseEnter={openSubmenu}
            //     onMouseEnter={handleLocation}
            //     onMouseLeave={closeSubmenu}
            //   >
            //     {page}
            //   </li>
            // );
            return <MapItemComponent index={index} page={page} />;
          })}
          {/* <li
            className='link-btn'
            onMouseEnter={openSubmenu}
            // onMouseEnter={() => console.log("cuoc song ma")}
            onMouseLeave={closeSubmenu}
          >
            Products
          </li>
          <li className='link-btn'>Developer</li>
          <li className='link-btn'>Company</li> */}
        </ul>
        <div className=''>
          <button className='btn signin-btn'>Sign in</button>
        </div>
      </div>
    </nav>
  );
};

const MapItemComponent = ({ index, page }) => {
  const {
    openSubmenu,
    closeSubmenu,
    openSidebar,
    sublinks,
    setLeftPosition,
    handleLeftPosition,
  } = useGlobalContext();
  const submenuRef = useRef();
  const handleLocation = () => {
    const positionLeft = submenuRef.current.getBoundingClientRect().left;
    const positionWidth = submenuRef.current.getBoundingClientRect().width;
    const position = positionLeft + positionWidth / 2;
    openSubmenu();
    handleLeftPosition(position);
    // const position = submenuRef.current;
    console.log(
      "🚀TCL: ~ file: Navbar.js ~ line 68 ~ //handleLocation ~ position",
      position,
      positionLeft,
      positionWidth
    );
  };
  return (
    <li
      ref={submenuRef}
      className='link-btn'
      key={index}
      // onMouseEnter={() => openSubmenu(position)}
      onMouseEnter={handleLocation}
      onMouseLeave={closeSubmenu}
    >
      {page}
    </li>
  );
};

export default Navbar;
