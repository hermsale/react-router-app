import React from "react";
import { useAuth } from "./auth";

function LoginPage() {

    const auth = useAuth();
    
    const [username, setUsername] = React.useState('');
    const [userpass, setUserpass] = React.useState('');
    
    const onLogin = (event) => {
        event.preventDefault();
        console.log(username);
        console.log(userpass);

        auth.login({username, userpass})
    }; 

    // const onChange = (event) => {
    //     setUsername(event.target.value)
    //     console.log(username);
    // };

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
                placeholder="usuario"  
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