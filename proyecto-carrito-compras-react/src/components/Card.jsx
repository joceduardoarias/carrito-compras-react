import React from 'react'
import { useState } from 'react'
import '../styles/card.css'
export const Card = ({ imagen, titulo, descrpcion, precio }) => {
    
    const [added, setAdded] = useState(false)

    return (
        <div className='tarjeta'>
            <img src={imagen} alt={titulo} className='tarjeta-imagen' />
            <div className='tarjeta-contenido'>
                <h3 className='tarjeta-titulo'>{titulo}</h3>
                <p className='tarjeta-descripcion'>{descrpcion}</p>
                <p className='tarjeta-precio'>{precio}</p>
            
            {added
                ? <button
                    type='button'
                    className='boton-quitar'
                >
                    Quitar del carrito
                </button>
                : <button
                    type='button'
                    className='boton-agregar'
                >
                    Agregar al carrito
                </button>
            }
            </div>
        </div>
    )
}
