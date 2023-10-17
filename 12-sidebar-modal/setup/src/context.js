import React, { useState, useContext } from 'react'

const AppContext = React.createContext();

const AppProvider = ({children}) => 
{
    const [isSidebarOpen,setIsSideBarOpen] = useState(false);
    const [isModalOpen,setIsModalOpen] = useState(false);

    const openSidebar = () => {
        setIsSideBarOpen(true);
    }
    const closeSidebar = () => {
        setIsSideBarOpen(false);
    }
    const openModal = () => {
        setIsModalOpen(true);
    }
    const closeModal = () => {
        setIsModalOpen(false);
    }
 return (
 <AppContext.Provider 
  value={{
    isSidebarOpen,
    isModalOpen,
    openModal,
    closeModal,
    openSidebar,
    closeSidebar
    }}
>
    {children}
    </AppContext.Provider>
);
}
export const useGlobalContext = () => {
    return useContext(AppContext);
}

export {AppContext, AppProvider}