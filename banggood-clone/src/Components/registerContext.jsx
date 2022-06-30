import React from "react";

export const LoginContext = React.createContext();

export function ContextProvider ({ children }) {
    const [logStatus, setLogStatus] = React.useState(false);
    const [user, setUser] = React.useState(null);

    const register = async(payload) => {
        setLogStatus(false);
        setUser(null);
        try {
            let response = await fetch(`https://fake-server-app-by-atul.herokuapp.com/registeredUsers`);
            let res = await response.json();
            
            let currentUser = res.find(e => ((e.email === payload.email) && (e.password === e.password)));
            if(currentUser){
                setLogStatus(true);
                setUser(currentUser);
            }
            return currentUser;
            
        } catch (error) {
            console.log(error);
        }

    }

    const manageData = async(id) => {
        try {

            let response = await fetch(`https://fake-server-app-by-atul.herokuapp.com/registeredUsers${id}`);
            let res = await response.json();

            setUser(res);
            
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <LoginContext.Provider value={{ logStatus, user, register, setLogStatus, setUser, manageData }}>
            {children}
        </LoginContext.Provider>
    )

}