import React from "react";

function LogoutPage() {

   const onLogout = () => {
    console.log("Logout");
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