import React from 'react';

const AuthContext = React.createContext();

function AuthProvider({children}){
    // contendra el estado de usuario / por defecto no hay usuario 
    const [user,setUser] = React.useState(null);

    const login = ({username}) =>{ 
        setUser({
            username
        })
    }

    const logout = () =>{ 
        setUser(null)
    }

    const auth = {user};

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