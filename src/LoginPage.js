import React from "react";
import { useAuth } from "./App/auth";
import { Navigate } from "react-router-dom";

function LoginPage() {

    const auth = useAuth();
    
    const [username, setUsername] = React.useState('');
    const [userpass, setUserpass] = React.useState('');
    
    const onLogin = (event) => {
        event.preventDefault();
        // console.log(username);
        // console.log(userpass);

        // le pasamos los argumentos al metodo login 
        auth.login({username, userpass})
    }; 

    if(auth.user){
        return <Navigate to="/profile"/>
    }

    return (
        <React.Fragment>

        <h1>Login</h1>
        <form onSubmit={onLogin}>
            <label>Ingrese su nombre de usuario:</label>
            <input
                value={username}
                onChange={
                    (e) =>{
                        setUsername(e.target.value)
                    }
                }
                placeholder="usuario"  
            />
             <input
                value={userpass}
                onChange={
                    (e) =>{
                        setUserpass(e.target.value)
                    }
                }
                placeholder="password"  
                type="password" 
            />
            <button
            type="submit"
            >
                Enviar
            </button>
        </form>
        </React.Fragment>
    )
}

export {LoginPage};