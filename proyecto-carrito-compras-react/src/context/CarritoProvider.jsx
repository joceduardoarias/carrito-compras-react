import React from 'react'
import { CarritoContext } from './CarritoContext'
import { useReducer } from 'react'

const initialState = []

const comprasReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case '[CARRITO] Agregar compra':
            console.log(action.type)
            return [...state, action.payload]
        case '[CARRITO] Aumentar cantidad': //TODO Agregar cantidad y modificar
            console.log(action.type)
            break
        case '[CARRITO] Disminuir cantidad': //TODO Agregar cantidad y modificar
            console.log(action.type)
            break;
        case '[CARRITO] Eliminar compra':
            console.log(action.type)
            return state.filter(compra => {
                if (compra.id != action.payload) {
                    return compra
                }
            })
        default:
            return state
    }
}

export const CarritoProvider = ({ children }) => {

    const [listaCompras, dispatch] = useReducer(comprasReducer, initialState)

    const agregarCompra = (compra) => {
        const action = {
            type: '[CARRITO] Agregar compra',
            payload: compra
        }
        dispatch(action)
    }
    const aumentarCantidad = (id) => {
        const action = {
            type: '[CARRITO] Aumentar cantidad',
            payload: id
        }
        dispatch(action)
    }
    const disminuirCantidad = (id) => {
        const action = {
            type: '[CARRITO] Disminuir cantidad',
            payload: id
        }
        dispatch(action)
    }
    const eliminarCompra = (id) => {
        const action = {
            type: '[CARRITO] Eliminar compra',
            payload: id
        }
        dispatch(action)
    }

    return (
        <CarritoContext.Provider value={{listaCompras, agregarCompra, disminuirCantidad, aumentarCantidad, eliminarCompra}}>
            {children}
        </CarritoContext.Provider>
    )
}
