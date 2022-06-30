import React from "react";
import { Link } from "react-router-dom";
import { LoginContext } from "./registerContext";


export default function Home() {

    const {user,logStatus,setLogStatus,setUser} = React.useContext(LoginContext);
    const handleLogout = () => {
        setLogStatus(false);
        setUser(null);
    }
    return (
        <div>
            {
                logStatus ? `Hello ${user.id}` : (<><p>Guest</p><Link to="/signup">Sign In</Link></>)
            }
           <br/>
            
            
           <br/>

            {
                !logStatus ? (<Link to="/register">Create an account</Link>) : (<button onClick={handleLogout}>Logout</button>)
              }

              <br/>

              <Link to="/payment">Payment</Link>
        
        </div>
    )
}