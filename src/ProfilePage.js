import React from "react";
import { useAuth } from "./App/auth";
// import { Navigate } from "react-router-dom";
import "./ProfilePage.css"
 

function ProfilePage() {

    const auth = useAuth();

    
    if(!auth.user.isAdmin){
        auth.user.isAdmin = 'Lector';
    }
    
    return (
        <>
            <div className="user-card">
                <h1 className="user-card">ProfilePage</h1>
                <h2 className="user-card">Bienvenido {auth.user?.username}</h2>
                <p className="user-card">Su password es {auth.user?.userpass}</p>
                <p className="user-card">Su rango de autorizacion es: {auth.user?.isAdmin.rol || auth.user?.isAdmin} </p>
            </div>
        </>
    )
}

export {ProfilePage};