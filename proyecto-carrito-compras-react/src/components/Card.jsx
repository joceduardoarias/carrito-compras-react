import React from 'react'
import { useState } from 'react'
import '../styles/card.css'
export const Card = ({ imagen, titulo, descrpcion, precio }) => {
    
    const [added, setAdded] = useState(false)
    const agregarHandle = () =>{
        setAdded(true)
    }
    const quitarHandle = () =>{
        setAdded(false)
    }
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
                    onClick={quitarHandle}
                >
                    Quitar del carrito
                </button>
                : <button
                    type='button'
                    className='boton-agregar'
                    onClick={agregarHandle}
                >
                    Agregar al carrito
                </button>
            }
            </div>
        </div>
    )
}
