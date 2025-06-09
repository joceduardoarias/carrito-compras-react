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
         <div className="card mb-3 shadow-sm">
            <div className="row g-0 align-items-center">
                <div className="col-md-3">
                    <img 
                        src={imagen} 
                        alt={titulo} 
                        className="img-fluid rounded-start" 
                        style={{ objectFit: 'cover', height: '100%', maxHeight: '150px', width: '100%' }}
                    />
                </div>
                <div className="col-md-9">
                    <div className="card-body d-flex flex-column h-100">
                        <h5 className="card-title">{titulo}</h5>
                        <p className="card-text">{descrpcion}</p>
                        <p className="card-text fw-bold">${precio}</p>
                        <div className="mt-auto d-flex gap-2">
                            <button
                                type="button"
                                className="btn btn-outline-danger btn-sm"
                                onClick={eliminarHandle}
                            >
                                Eliminar
                            </button>
                            <button
                                type="button"
                                className="btn btn-success btn-sm"
                                onClick={editarHandle}
                            >
                                Editar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
