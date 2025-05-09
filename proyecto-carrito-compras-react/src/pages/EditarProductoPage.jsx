import React, { useEffect, useContext } from 'react';
import { useForm } from '../hooks/useForm';
import { ProductosContext } from '../context/ProductosContext'

export const EditarProductoPage = ({ producto, cancelarhandle }) => {
  
  const { editarProducto } = useContext(ProductosContext)
  const { formState, onInpuChange, setFormState } = useForm({
    title: '',
    description: '',
    price: ''
  });


  useEffect(() => {
    if (producto) {
      setFormState({
        id: producto.id || '',
        title: producto.title || '',
        description: producto.description || '',
        price: producto.price || '',
        category: producto.category || '',
        image: producto.image || ''
      });
    }
  }, [producto, setFormState]);

  if (!producto) {
    return <div>No se encontró el producto para editar.</div>;
  }

  const btnCancelarClick = () => {
    cancelarhandle();
  };

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(formState); 
    editarProducto(formState)
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Editar Producto</h1>
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label htmlFor="titulo" className="form-label">Título</label>
          <input
            type="text"
            className="form-control"
            name="title"
            value={formState.title} 
            onChange={onInpuChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="descripcion" className="form-label">Descripción</label>
          <textarea
            className="form-control"
            name="description"
            rows="3"
            value={formState.description} 
            onChange={onInpuChange}
          ></textarea>
        </div>

        <div className="mb-3">
          <label htmlFor="precio" className="form-label">Precio</label>
          <input
            type="number"
            className="form-control"
            name="price"
            value={formState.price} 
            onChange={onInpuChange}
          />
        </div>

        <button type="submit" className="btn btn-primary">Guardar Cambios</button>
        <button
          type="button"
          className="btn btn-danger"
          onClick={btnCancelarClick}
        >
          Cancelar
        </button>
      </form>
    </div>
  );
};