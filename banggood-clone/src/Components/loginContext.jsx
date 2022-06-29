import React from "react";

export const LoginContext = React.createContext();

export function LoginContextProvider ({ children }) {
    const [isAuth, setIsAuth] = React.useState(false);
    const [user, setUser] = React.useState(null);

    const login = async(payload) => {
        setIsAuth(false);
        setUser(null);
        try {
            let response = await fetch(`http://localhost:8080/registeredUsers`);
            let res = await response.json();
            // eslint-disable-next-line
            let loggedUser = res.find(e => ((e.email === payload.email) && (e.password === e.password)));
            if(loggedUser){
                setIsAuth(true);
                setUser(loggedUser);
            }
            return loggedUser;
            
        } catch (error) {
            console.log(error);
        }

    }

    const manageData = async(id) => {
        try {
            let response = await fetch(`http://localhost:8080/registeredUsers${id}`);
            let res = await response.json();
            setUser(res);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <LoginContext.Provider value={{ isAuth, user, login, setIsAuth, setUser, manageData }}>
            {children}
        </LoginContext.Provider>
    )

}