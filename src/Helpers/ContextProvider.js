import { useState, useEffect, createContext } from "react"
export const UserContext = createContext()

export function UserProvider({ children }) {
    const [users, setUsers] = useState([]);
    const [newName, setNewName] = useState()
    const [email, setNewEmail] = useState()
    return (
        <div className="provider">
            <UserContext.Provider value={{ users, setUsers, newName, setNewName, email, setNewEmail }}>
                {children}
            </UserContext.Provider>
        </div>
    )
}