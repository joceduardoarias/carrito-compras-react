import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { UsuariosContext } from '../context/UsuariosProvider'; 

export const LoginPage = () => {
    const { loginUsuario, error } = useContext(UsuariosContext); 

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm(); 

    const onSubmit = async (data) => {
        try {
            await loginUsuario(data); 
        } catch (error) {
            console.error('Error al iniciar sesión:', error);
        }
    };

    return (
        <div className="container mt-5">
            <h1 className="mb-4">Iniciar Sesión</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Correo Electrónico</label>
                    <input
                        type="email"
                        className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                        {...register('email', { required: 'El correo electrónico es obligatorio.' })}
                    />
                    {errors.email && <div className="invalid-feedback">{errors.email.message}</div>}
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Contraseña</label>
                    <input
                        type="password"
                        className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                        {...register('password', { required: 'La contraseña es obligatoria.' })}
                    />
                    {errors.password && <div className="invalid-feedback">{errors.password.message}</div>}
                </div>
                <button type="submit" className="btn btn-primary">Iniciar Sesión</button>
            </form>
            {error && <p className="text-danger mt-3">{error}</p>}
        </div>
    );
};