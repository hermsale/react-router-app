import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

const AuthContext = React.createContext();

// la siguiente lista son administradores
const adminList = [{
    nombre:'AHerms',
    rol: 'Admin',
},{
    nombre:'Jonathan',
    rol:'Editor'
},
{
    nombre:'David',
    rol:'Lector'
}];

function AuthProvider({children}){

    console.log(adminList);
    const navigate = useNavigate();

    // contendra el estado de usuario / por defecto no hay usuario 
    const [user,setUser] = React.useState(null);


    // creamos la funcion de login, si hay un usuario lo setea como User 
    const login = ({username, userpass}) =>{ 
        console.log(username)
            const isAdmin = adminList.find(user => {
                if(user.nombre === username){
                    return user.rol;
                }else{
                    return user.rol === 'Lector';  
                }
            }
        );
        
        setUser({username,userpass, isAdmin})
        // console.log(isAdmin);
        navigate('/profile');
    }
    
    console.log(user);
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

// Este será nuestro consumer - del provider 
function useAuth(){
    const auth = React.useContext(AuthContext);
    return auth;
}

// componente para proteger rutas - si no esta logueado lo redirecciona a/login
function ProtectedRoute(props){
    const auth = useAuth();

    if(!auth.user){
        return <Navigate to={'/login'} />
    }

    return props.children;
}



export {  AuthProvider, useAuth, ProtectedRoute  };