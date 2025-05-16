import React, { createContext, useState } from 'react';

// Create Context
export const UserDataContext = createContext();

// User Provider Component
const UserProvider = ({ children }) => {
    const [user, setUser] = useState({
        email: '',
        mobilenum: '',
        fullName: {
            firstName: '',
            lastName: ''
        }
    });

    return (
        <UserDataContext.Provider value={{ user, setUser }}>
            {children}
        </UserDataContext.Provider>
    );
};

export default UserProvider;