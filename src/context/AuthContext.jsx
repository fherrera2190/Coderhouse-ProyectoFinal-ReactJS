import { createContext, useContext } from "react";
export const AuthContext = createContext();
export function AuthProvider({ children }) {
    const user = {
        login: true,
    };

    const useAuth = () => {
        const context = useContext(AuthContext);
        return context;
    };
    return (
        <AuthContext.Provider value={{ user, useAuth }}>
            {children}
        </AuthContext.Provider>
    );
};