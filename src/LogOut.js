import React from "react";
import { useAuth } from "./App/auth";

function LogoutPage() {
    const auth = useAuth();

   const onLogout = () => {
    console.log("Logout");
    auth.logout();
   }


    return (
        <React.Fragment>

        <h1>Login</h1>
        <form onSubmit={onLogout}>
            <label>Desea salir?</label>
            <button
            type="submit"
            >
                Salir
            </button>
        </form>
        </React.Fragment>
    )
}

export {LogoutPage};