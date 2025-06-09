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
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
            <div className="container">
                <NavLink className="navbar-brand fw-bold" to="/">Gestión de productos</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink to="/" className="nav-link" aria-current="page">Productos</NavLink>
                        </li>
                    </ul>
                    {usuario && (
                        <div className="d-flex align-items-center gap-3">
                            <div className="text-light d-flex align-items-center gap-2">
                                <AccountCircleIcon />
                                <span className="fw-semibold">{usuario.email || 'Usuario'}</span>
                            </div>
                            <button className="btn btn-outline-light btn-sm" onClick={handleLogout}>
                                Logout
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
};