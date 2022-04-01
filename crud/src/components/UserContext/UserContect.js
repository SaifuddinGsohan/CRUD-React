import React from 'react';
import { createContext } from 'react';
import { useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState([
        {
            id: 1,
            name: 'John Doe',
            position: 'CEO',
            Salary: 100000
        },
        {
            id: 2,
            name: 'Shuvo',
            position: 'EEE',
            Salary: 70000
        },
        {
            id: 3,
            name: 'Mahadi',
            position: 'CSE',
            Salary: 90000
        },
    ]);
    return (
        <UserContext.Provider value={[user, setUser]}>
            {children}
        </UserContext.Provider>
    )
}