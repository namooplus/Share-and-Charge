import { useState, createContext, useMemo } from 'react';

export const UserContext = createContext(); 
export const UserProvider = (props) => {
    const [username, setUsername] = useState("default name");
// the state that we'll be storing the username into

/* because we will be providing an object to the provider, it is better to put the value inside a useMemo so that the component will only re-render when there's a change in the value. */

const value = useMemo(
   () => ({username, setUsername}),[username])


    return (
        <UserContext.Provider
            value={value}
        >
            {props.children}
        </UserContext.Provider>
    );
}