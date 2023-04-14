import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "./App/auth";


function Menu (){

    // traemos el estado del auth para saber si hay alguien logeado o no 
    const auth = useAuth();
    

    return (
        <nav>
            <ul>            
                    {
                    routes.map(route => {
                        // si hay un usuario, y la ruta es Login, la saltea 
                        if(route.text==='Login' && auth.user) return null;
                        // si es una ruta privada y no tenemos usuario, lo saltea
                        if(route.private && !auth.user)return null;
                            return (     
                                <li key={route.to}>                                                  
                                    <NavLink style={({ isActive }) => ({ color: isActive ? 'red' : 'blue' })} to={route.to}>
                                        {route.text}
                                    </NavLink>
                                </li>                                
                            )
                                                
                    }
                    )
                    }
            </ul>

        </nav>
    );
}

const routes = [
    {
        to:"/",
        text:'Home',
        private:false,
    },
    {
        to:"/blog",
        text:'Blog',
        private:false,
    },
    {
        to:"/profile",
        text:'Profile',
        private:true,
    },
    {
        to:"/login",
        text:'Login',
        private:false,
    },
    {
        to:"/logout",
        text:'Logout',
        private:true,
    }


];

export {Menu}