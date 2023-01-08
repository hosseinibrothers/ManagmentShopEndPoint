import {createContext, useContext, useState} from "react";

export const ToggleSidebarContext = createContext();
export const ToggleSidebarContextDispatcher = createContext()

export const ToggleSidebarContextProvider = ({children}) => {

    const [isOpenSidebar, setIsOpenSideBar] = useState({expanded: false, collapsed: false, hovered: false});

    return (
        <ToggleSidebarContext.Provider value={isOpenSidebar}>
            <ToggleSidebarContextDispatcher.Provider value={setIsOpenSideBar}>
                {children}
            </ToggleSidebarContextDispatcher.Provider>
        </ToggleSidebarContext.Provider>
    )
}

export const useIsOpenSidebar = () => useContext(ToggleSidebarContext);
export const useIsOpenSidebarAction = () => useContext(ToggleSidebarContextDispatcher);