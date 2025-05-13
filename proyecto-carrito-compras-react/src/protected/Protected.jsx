import React from 'react'
import { UsuariosContext } from '../context/usuariosContext';
import { Navigate, Outlet } from "react-router";

const Protected = () => {
    const { isLoggedIn } = useContext(UsuariosContext);
   
    if (!isLoggedIn) {
        return <Navigate to="/login" replace />;
    }

    return <Outlet />;
}

export default Protected