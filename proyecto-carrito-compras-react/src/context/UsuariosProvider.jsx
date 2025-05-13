import React, { createContext, useState } from 'react';
import axios from 'axios';


export const UsuariosContext = createContext();

export const UsuariosProvider = ({ children }) => {
    const [usuario, setUsuario] = useState(null); 
    const [error, setError] = useState(null); 
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    
    const registrarUsuario = async (datos) => {
        try {
            const response = await axios.post('http://localhost:5100/api/usuarios/registro', datos);
            setUsuario(response.data); 
            setError(null); 
        } catch (error) {
            console.error('Error al registrar usuario:', error);
            setError(error.response.data.message || 'Error al registrar usuario');
        }
    };

    
    const loginUsuario = async (credenciales) => {
        try {
            console.log(credenciales);
            
            const response = await axios.post('http://localhost:5100/api/login', credenciales);
            console.log(response.data.usuario);
            setUsuario(response.data.usuario); 
            setIsLoggedIn(true);
            setError(null); 
        } catch (error) {
            console.error('Error al iniciar sesión:', error);
            setError(error.response.data.message || 'Error al iniciar sesión');
        }
    };

    
    const logoutUsuario = () => {
        setUsuario(null);
    };

    return (
        <UsuariosContext.Provider
            value={{
                usuario,
                error,
                registrarUsuario,
                loginUsuario,
                logoutUsuario,
                isLoggedIn
            }}
        >
            {children}
        </UsuariosContext.Provider>
    );
};