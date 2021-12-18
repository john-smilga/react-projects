import React, { useState, useContext } from "react";
import sublinks from "./data";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isSubmenuOpen, setSubmenuOpen] = useState(false);
  const openSubmenu = () => {
    setSubmenuOpen(true);
  };
  const closeSubmenu = () => {
    setSubmenuOpen(false);
  };
  return (
    <AppContext.Provider value={{ isSubmenuOpen, openSubmenu, closeSubmenu }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };

export const useGlobalContext = () => useContext(AppContext);
