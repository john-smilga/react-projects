import React from "react";
import { FaCreditCard, FaTimes } from "react-icons/fa";
import { useGlobalContext } from "./context";
import sublinks from "./data";

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();
  return (
    <aside className={`sidebar-wrapper ${isSidebarOpen ? "show" : ""}`}>
      <article className='sidebar'>
        <h4>Products</h4>
        <button className='close-btn' onClick={closeSidebar}>
          <FaTimes />
        </button>
        <ul className='sidebar-sublinks'>
          <li>
            <a href=''>
              <FaCreditCard /> Payment
            </a>
          </li>
          <li>
            <a href=''>
              <FaCreditCard /> Payment
            </a>
          </li>
          <li>
            <a href=''>
              <FaCreditCard /> Payment
            </a>
          </li>
          <li>
            <a href=''>
              <FaCreditCard /> Payment
            </a>
          </li>
        </ul>
      </article>
    </aside>
  );
};

export default Sidebar;
