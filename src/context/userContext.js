import { createContext, useContext, useState } from "react";

const UserContext = createContext();

export const useUseContext = () => {
    return useContext(UserContext)
}

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState({
        token: null,
        name: null,
        cart: []
    })

    const login = (userData) => {
        setUser(userData);
    }

    const logout = () => {
        setUser({
            id: null,
            name: null,
            cart: []
        })
    }


}