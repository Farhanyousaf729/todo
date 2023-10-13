import React, { createContext,useContext, useState } from "react";

export const MyContext = createContext();

export const ContextProvider = ({ children }) => {
    const [theme, setTheme] = useState("light");

    const changeTheme = () => {
        if (theme === "light") {
            setTheme("dark");
        } else {
            setTheme("light");
        }
    };

    return (
        <MyContext.Provider value={{ theme, changeTheme }}>
            {children}
        </MyContext.Provider>
    );
};
export const useMyContext = () => {
    return useContext(MyContext);
};