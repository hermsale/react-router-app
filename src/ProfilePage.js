import React from "react";
import { useAuth } from "./auth";
// import { Navigate } from "react-router-dom";
 

function ProfilePage() {

    const auth = useAuth();

    
    if(!auth.user.isAdmin){
        auth.user.isAdmin = 'Lector';
    }
    
    return (
        <>
            {/* {console.log(auth)} */}
            <h1>ProfilePage</h1>
            <h2>Bienvenido {auth.user?.username}</h2>
            <h3>Y su password es {auth.user?.userpass}</h3>
            <h3>Su rango de autorizacion es: {auth.user?.isAdmin.rol || auth.user?.isAdmin} </h3>
        </>
    )
}

export {ProfilePage};