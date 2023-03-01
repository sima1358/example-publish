import { createContext, useState } from "react";

//Context itself export it to the reest of the application
export const AuthContext = createContext();

//props.children : children allow us to get access to all children of the component
//provider component: a component which combines provider with the state.
//below is a react component 
export default function AuthContextProviderComponent({children}){

    const [username, setUsername] = useState("Mark");
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    //this function will handle the full login/logout
    //handleLogin(true, "Mark")  1st case user signs in (in this case Mark)
    //handleLogin(false)   2nd case user signs out. 
    const handleLogin =(isAuthenticated, username = "") => {
        if(isAuthenticated){
            setIsAuthenticated(true);
            setUsername(username);
        } else {
            setIsAuthenticated(false);
            setUsername("");
        }
    }

    return (
        <AuthContext.Provider value={{isAuthenticated, handleLogin}}>
            {children}
        </AuthContext.Provider>
    )
}

