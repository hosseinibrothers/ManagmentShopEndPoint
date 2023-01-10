import {createContext, useContext, useState} from "react";

const AuthContext = createContext()
const AuthContextDispatcher = createContext()
export const AuthContextProvider = ({children}) => {

    const [user, setUser] = useState(null);

    return (
        <AuthContext.Provider value={user}>
            <AuthContextDispatcher.Provider value={setUser}>
                {children}
            </AuthContextDispatcher.Provider>
        </AuthContext.Provider>
    )
}
export const useAuth = () => useContext(AuthContext);
export const useAuthAction = () => useContext(AuthContextDispatcher);