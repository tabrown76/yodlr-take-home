import React, { createContext, useState } from 'react';

export const Context = createContext();

export const ContextProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(false);
    // const [user, setUser] = useState({});

    return (
        <Context.Provider value={{ 
            isLoading, 
            setIsLoading
        }}>
            {children}
        </Context.Provider>
    );
};
