import { ProductosContext } from "./ProductosContext";
import { useState, useEffect, useReducer } from "react";
import axios from "axios"; 

const initialState = [];

const productosReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case '[PRODUCTOS] Obtener productos':
            console.log(action.type);
            return [...action.payload];
        case '[PRODUCTOS] Agregar producto':
            console.log(action.type);
            console.log(action.payload);
            return [...state, action.payload];
               case '[PRODUCTOS] Editar producto':
            return state.map((producto) =>
                producto.id === action.payload.id || producto._id === action.payload._id
                    ? action.payload
                    : producto
            );
        case '[PRODUCTOS] Eliminar producto':
            console.log(action.type);
            console.log(action.payload);
            return state.filter(producto => producto.id !== action.payload);
        default:
            return state;
    }
};

export const ProductosProvider = ({ children }) => {
    const [productosState, dispatch] = useReducer(productosReducer, initialState);

    const fetchProductos = async () => {
        try {
            const response = await axios.get('http://localhost:5100/api/productos'); 
            obtenerProductos(response.data); 
        } catch (error) {
            console.error('Error al obtener productos:', error);
        }
    };

    const obtenerProductos = (productosData) => {
        const action = {
            type: '[PRODUCTOS] Obtener productos',
            payload: productosData
        };
        dispatch(action);
    };

    const agregarProducto = async (producto) => {
        try {
            const response = await axios.post('http://localhost:5100/api/productos', producto);
            const action = {
                type: '[PRODUCTOS] Agregar producto',
                payload: response.data
            };
            dispatch(action);
        } catch (error) {
            console.error('Error al agregar producto:', error);
        }
    };

          const editarProducto = async (producto) => {
        try {
            console.log(producto.id);
            
            const response = await axios.put(`http://localhost:5100/api/producto/${producto.id}`, producto);
            const action = {
                type: '[PRODUCTOS] Editar producto',
                payload: response.data, 
            };
            dispatch(action); 
        } catch (error) {
            console.error('Error al editar producto:', error);
            throw new Error('No se pudo editar el producto.');
        }
    };

    const eliminarProducto = async (id) => {
        try {
            await axios.delete(`http://localhost:5100/api/producto/${id}`); 
            const action = {
                type: '[PRODUCTOS] Eliminar producto',
                payload: id
            };
            dispatch(action);
        } catch (error) {
            console.error('Error al eliminar producto:', error);
        }
    };

    return (
        <ProductosContext.Provider value={{ fetchProductos, agregarProducto, editarProducto, eliminarProducto, productosState }}>
            {children}
        </ProductosContext.Provider>
    );
};