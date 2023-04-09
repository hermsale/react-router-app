import React from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = React.createContext();

function AuthProvider({children}){
    const navigate = useNavigate();
    // contendra el estado de usuario / por defecto no hay usuario 
    const [user,setUser] = React.useState(null);


    // creamos la funcion de login, si hay un usuario lo setea como User 
    const login = ({username, userpass}) =>{ 
        setUser({username,userpass})
        navigate('/profile');
    }

    const logout = () =>{ 
        setUser(null)
        navigate('/');
    }


    // si user es null, significa que no estamos autenticados - enviamos tambien envuelto en el provider, el login y logout
    const auth = {
        user,
        login,
        logout
    };

    return (
        <AuthContext.Provider value={auth}>
            {children}
        </AuthContext.Provider>
    )
}

function useAuth(){
    const auth = React.useContext(AuthContext);
    return auth;
}
export {  AuthProvider, useAuth  };