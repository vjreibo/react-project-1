import React, { useState, useContext } from 'react'
import { FaSleigh } from 'react-icons/fa';
import sublinks from './data'

const AppContext = React.createContext();

export const AppProvider = ({children})=>{
    const [isSidebarOpen,setIsSidebarOpen] = useState(false);
    const [isSubmenuOpen,setIsSubmenuOpen] = useState(false);
    const [location,setLocation] = useState({})
    const [page,setPage] = useState({page:'',links:[]})
    
    const openSidebar = ()=>{
        setIsSidebarOpen(true);
    }

    const closeSidebar = ()=>{
        setIsSidebarOpen(false);
    }

    const openSubmenu = (text,temp)=>{
        const index = sublinks.find(link=>link.page===text);
        setLocation(temp)
        setPage(index)
        setIsSubmenuOpen(true);
    }

    const closeSubmenu = ()=>{
        setIsSubmenuOpen(false);
    }

    return (<AppContext.Provider value={{
        isSidebarOpen,
        openSidebar,
        closeSidebar,
        isSubmenuOpen,
        openSubmenu,
        closeSubmenu,
        page,
        location
    }}>{children}</AppContext.Provider>);
}

export const useGlobalContext = ()=>{
    return useContext(AppContext);
}
