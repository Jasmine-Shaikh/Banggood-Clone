import React from "react";
import { LoginContext } from "./loginContext";
import { Link } from "react-router-dom";


export default function Home() {

    const {user,isAuth,setIsAuth,setUser} = React.useContext(LoginContext);
    const handleLogout = () => {
        setIsAuth(false);
        setUser(null);
    }
    return (
        <div>
            {
                isAuth ? `Hello -- ${user.id}` : "Guest"
            }
           <br/>
            
            <Link to="/signup">Sign In</Link>
           <br/>

            {
                !isAuth ? (<Link to="/register">Create an account</Link>) : (<button onClick={handleLogout}>Logout</button>)
              }
        
        </div>
    )
}