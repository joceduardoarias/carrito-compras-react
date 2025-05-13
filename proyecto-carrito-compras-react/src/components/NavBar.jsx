import React, { useContext } from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle'; 
import { NavLink } from "react-router-dom"; 
import { UsuariosContext } from '../context/UsuariosProvider'; 
import { useNavigate } from 'react-router-dom'

export const NavBar = () => {
    const { usuario, logoutUsuario } = useContext(UsuariosContext); 
    const navigate = useNavigate()

    const handleLogout = () => {
        logoutUsuario(); 
        navigate('/login')
    };

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">Gestión de productos</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink to="/" className="nav-link active" aria-current="page">Productos</NavLink>
                        </li>
                    </ul>
                    <div className="d-flex align-items-center">
                        {usuario ? (
                            <>
                                <span className="me-3 d-flex align-items-center">
                                    <AccountCircleIcon className="me-1" />
                                    {usuario.email || 'Usuario'}
                                </span>
                                <button className="btn btn-outline-danger" onClick={handleLogout}>
                                    Logout
                                </button>
                            </>
                        ) : (
                           <></>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
};