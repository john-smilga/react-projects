import React from "react";
import { FaCreditCard, FaTimes } from "react-icons/fa";
import { useGlobalContext } from "./context";
import sublinks from "./data";

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();
  return (
    <aside className={`sidebar-wrapper ${isSidebarOpen ? "show" : ""}`}>
      <article className='sidebar'>
        <button className='close-btn' onClick={closeSidebar}>
          <FaTimes />
        </button>
        <div className='sidebar-links'>
          {sublinks.map(({ page, links }, index) => (
            <article key={index}>
              <h4>{page}</h4>
              <div className='sidebar-sublinks'>
                {links.map(({ label, icon, url }, index) => (
                  <a href={url}>
                    {icon} {label}
                  </a>
                ))}
              </div>
            </article>
          ))}
        </div>
      </article>
    </aside>
  );
};

export default Sidebar;
