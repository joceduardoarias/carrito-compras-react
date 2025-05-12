import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { ProductosContext } from '../context/ProductosContext';

export const AgregarProducto = ({ cancelarhandle }) => {
    const { agregarProducto, fetchProductos } = useContext(ProductosContext);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        try {
            // console.log('Datos enviados:', data);
            await agregarProducto(data);
            fetchProductos(); 
            cancelarhandle(); 
        } catch (error) {
            console.error('Error al agregar producto:', error);
            alert('Hubo un error al agregar el producto.');
        }
    };

    return (
        <div className="container mt-5">
            <h1 className="mb-4">Agregar Producto</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3">
                    <label htmlFor="titulo" className="form-label">Título</label>
                    <input
                        type="text"
                        className={`form-control ${errors.title ? 'is-invalid' : ''}`}
                        {...register('title', { required: 'El título es obligatorio.' })}
                    />
                    {errors.title && <div className="invalid-feedback">{errors.title.message}</div>}
                </div>

                <div className="mb-3">
                    <label htmlFor="descripcion" className="form-label">Descripción</label>
                    <textarea
                        className={`form-control ${errors.description ? 'is-invalid' : ''}`}
                        rows="3"
                        {...register('description', { required: 'La descripción es obligatoria.' })}
                    ></textarea>
                    {errors.description && <div className="invalid-feedback">{errors.description.message}</div>}
                </div>

                <div className="mb-3">
                    <label htmlFor="precio" className="form-label">Precio</label>
                    <input
                        type="number"
                        className={`form-control ${errors.price ? 'is-invalid' : ''}`}
                        {...register('price', {
                            required: 'El precio es obligatorio.',
                            min: { value: 1, message: 'El precio debe ser mayor a 0.' },
                        })}
                    />
                    {errors.price && <div className="invalid-feedback">{errors.price.message}</div>}
                </div>

                <div className="mb-3">
                    <label htmlFor="imagen" className="form-label">Imagen (URL)</label>
                    <input
                        type="text"
                         {...register('image', { required: 'La URL de la imagen es obligatoria.' })}
                    />
                    {errors.image && <div className="invalid-feedback"></div>}
                </div>

                <button type="submit" className="btn btn-primary">Agregar Producto</button>
                <button
                    type="button"
                    className="btn btn-danger"
                    onClick={cancelarhandle}
                >
                    Cancelar
                </button>
            </form>
        </div>
    );
};