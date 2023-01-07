import {createContext, useState} from "react";

export const ToggleSidebarContext = createContext();
export const ToggleSidebarContextDispatcher = createContext()

export const ToggleSidebarContextProvider = ({children}) => {

    const [isOpenSidebar, setIsOpenSideBar] = useState(true);

    return (
        <ToggleSidebarContext.Provider value={isOpenSidebar}>
            <ToggleSidebarContextDispatcher.Provider value={setIsOpenSideBar}>
                {children}
            </ToggleSidebarContextDispatcher.Provider>
        </ToggleSidebarContext.Provider>
    )
}
