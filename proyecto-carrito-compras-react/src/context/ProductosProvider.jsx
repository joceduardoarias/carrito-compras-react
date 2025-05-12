import { ProductosContext } from "./ProductosContext"
import { useState, useEffect } from 'react'
import { useReducer } from 'react'

const initialState = []

const productosReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case '[PRODUCTOS] Obtener productos':
        case '[PRODUCTOS] Obtener productos':
            console.log(action.type);
            return [...action.payload];
        case '[PRODUCTOS] Agregar producto':
            console.log(action.type)
            console.log(action.payload);
            return [...state, action.payload]
        case '[PRODUCTOS] Editar producto':
            console.log(action.type)
            console.log(action.payload);
            return state.map((producto) =>
                producto.id === action.payload.id ? action.payload : producto
            );
        case '[PRODUCTOS] Eliminar producto':
            console.log(action.type)
            console.log(action.payload);
            return state.filter(producto => {
                if (producto.id != action.payload) {
                    return producto
                }
            })
        default:
            return state
    }
}

export const ProductosProvider = ({ children }) => {
    const [productos, setProductos] = useState([])

    const fetchProductos = async () => {
        const response = await fetch('http://localhost:5100/api/productos')
        const data = await response.json()
        obtenerProductos(data)
    }

    // useEffect(() => {
    //     fetchProductos()

    // }, [])

    const [productosState, dispatch] = useReducer(productosReducer, initialState)

    const obtenerProductos = (productosData) => {
        const action = {
            type: '[PRODUCTOS] Obtener productos',
            payload: productosData
        }
        dispatch(action)
    }
    const agregarProducto = (producto) => {
        const action = {
            type: '[PRODUCTOS] Agregar producto',
            payload: producto
        }
        dispatch(action)
    }
    const editarProducto = (producto) => {
        const action = {
            type: '[PRODUCTOS] Editar producto',
            payload: producto
        }
        dispatch(action)
    }
    const eliminarProducto = (id) => {
        const action = {
            type: '[PRODUCTOS] Eliminar producto',
            payload: id
        }
        dispatch(action)
    }

    return (
        <ProductosContext.Provider value={{ fetchProductos, productos, setProductos, agregarProducto, editarProducto, eliminarProducto, productosState }}>
            {children}
        </ProductosContext.Provider>
    )
}
