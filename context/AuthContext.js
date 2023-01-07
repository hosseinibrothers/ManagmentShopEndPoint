import {createContext, useContext, useState} from "react";

const AuthContext = createContext({
    user : null,
    isLoggedIn: false
})

export const AuthContextProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const context = {user, isLoggedIn};
    return (
        <AuthContext.Provider value={context}>
            {children}
        </AuthContext.Provider>
    )
}
export const useAuth = () => useContext(AuthContext);