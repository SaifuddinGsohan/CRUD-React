import React from 'react';
import { createContext } from 'react';
import { useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [users, setUsers] = useState([
        {
            id: 1,
            name: 'John Doe',
            position: 'CEO',
            salary: 100000
        },
        {
            id: 2,
            name: 'Shuvo',
            position: 'EEE',
            salary: 70000
        },
        {
            id: 3,
            name: 'Mahadi',
            position: 'CSE',
            salary: 90000
        },
    ]);
    return (
        <UserContext.Provider value={[users, setUsers]}>
            {children}
        </UserContext.Provider>
    )
}