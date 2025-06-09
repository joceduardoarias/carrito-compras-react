import React, { useEffect, useContext } from 'react';
import { useForm } from 'react-hook-form';
import { ProductosContext } from '../context/ProductosContext';

export const EditarProductoPage = ({ producto, cancelarhandle }) => {
    const { editarProducto, fetchProductos } = useContext(ProductosContext);


    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm();

    useEffect(() => {
        if (producto) {
            setValue('id', producto._id || '');
            setValue('title', producto.title || '');
            setValue('description', producto.description || '');
            setValue('price', producto.price || '');
            setValue('category', producto.category || '');
            setValue('image', producto.image || '');
        }
    }, [producto, setValue]);

    if (!producto) {
        return <div className="container mt-5 text-center">No se encontró el producto para editar.</div>;
    }

    const btnCancelarClick = () => {
        cancelarhandle();
    };

    const onSubmit = async (data) => {
        try {
            console.log('Datos enviados:', data);
            await editarProducto(data);
            cancelarhandle();
            fetchProductos();
        } catch (error) {
            console.error(error.message);
            alert('Hubo un error al editar el producto.');
        }
    };

    return (
        <div className="container d-flex justify-content-center align-items-center mt-5">
            <div className="card shadow p-4 w-100" style={{ maxWidth: '600px' }}>
                <h2 className="mb-4 text-center">Editar Producto</h2>
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

                    <div className="d-flex justify-content-end gap-2 mt-4">
                        <button type="submit" className="btn btn-primary">Guardar Cambios</button>
                        <button
                            type="button"
                            className="btn btn-outline-secondary"
                            onClick={btnCancelarClick}
                        >
                            Cancelar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};