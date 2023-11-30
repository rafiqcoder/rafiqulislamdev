import React, { useState } from 'react';

export const AuthContext = React.createContext();

const Context = ({ children }) => {
    const [data,setData] = useState('data is here');
    return (
        <AuthContext.Provider value={{ data }}>
        {children}
        </AuthContext.Provider>
    );
};

export default Context;