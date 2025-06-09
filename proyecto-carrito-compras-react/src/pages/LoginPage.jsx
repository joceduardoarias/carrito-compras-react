import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { UsuariosContext } from '../context/UsuariosProvider'
import { useNavigate } from 'react-router-dom'

export const LoginPage = () => {
    const { loginUsuario, error } = useContext(UsuariosContext) 
    const navigate = useNavigate()
    
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm(); 

    const onSubmit = async (data) => {
        try {
            await loginUsuario(data); 
            navigate('/')
        } catch (error) {
            console.error('Error al iniciar sesión:', error);
        }
    };

    return (
        <div className="container d-flex justify-content-center align-items-center min-vh-100">
            <div className="card shadow p-4" style={{ maxWidth: '400px', width: '100%' }}>
                <h2 className="text-center mb-4">Iniciar Sesión</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Correo Electrónico</label>
                        <input
                            type="email"
                            id="email"
                            className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                            {...register('email', { required: 'El correo electrónico es obligatorio.' })}
                        />
                        {errors.email && <div className="invalid-feedback">{errors.email.message}</div>}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Contraseña</label>
                        <input
                            type="password"
                            id="password"
                            className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                            {...register('password', { required: 'La contraseña es obligatoria.' })}
                        />
                        {errors.password && <div className="invalid-feedback">{errors.password.message}</div>}
                    </div>
                    <button type="submit" className="btn btn-primary w-100">Iniciar Sesión</button>
                </form>
                {error && <p className="text-danger mt-3 text-center">{error}</p>}
            </div>
        </div>
    );
};
