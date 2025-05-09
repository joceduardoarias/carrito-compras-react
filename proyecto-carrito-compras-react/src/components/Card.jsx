import React from 'react'
import '../styles/card.css'

export const Card = ({ imagen, titulo, descrpcion, precio, editarHandle, eliminarHandle }) => {
    
    
    const editarClick = () =>{
        editarHandle()        
    }
    const eliminarClick = () =>{
        eliminarHandle()        
    }
    return (
        <div className='tarjeta'>
            <img src={imagen} alt={titulo} className='tarjeta-imagen' />
            <div className='tarjeta-contenido'>
                <h3 className='tarjeta-titulo'>{titulo}</h3>
                <p className='tarjeta-descripcion'>{descrpcion}</p>
                <p className='tarjeta-precio'>{precio}</p>
            
            
                <button
                    type='button'
                    className='boton-quitar'
                    onClick={eliminarClick}
                >
                    Eliminar
                </button>
                <button
                    type='button'
                    className='boton-agregar'
                    onClick={editarClick}
                >
                    Editar
                </button>
            
            </div>
        </div>
    )
}
