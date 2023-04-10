import React from "react";
import { useAuth } from "./auth";

function ProfilePage() {

    const auth = useAuth();
    
    return (
        <>
            {console.log(auth)}
            <h1>ProfilePage</h1>
            <h2>Bienvenido {auth.user.username}</h2>
            <h3>Y su password es {auth.user.userpass}</h3>
        </>
    )
}

export {ProfilePage};