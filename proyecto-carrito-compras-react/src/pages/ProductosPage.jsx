import React, { useContext, useState, useEffect } from 'react'
import { Card } from '../components/Card'
import { ProductosContext } from '../context/ProductosContext'
import { EditarProductoPage } from './EditarProductoPage'


export const ProductosPage = () => {

    const { fetchProductos, productos, eliminarProducto, productosState } = useContext(ProductosContext)

    const [verLista, setVerLista] = useState(true)
    const [producto, setProducto] = useState({})

    const editarHandle = (producto) => {                
        setProducto(producto)
        setVerLista(false)
    }
    const eliminarHandle = (id) => {
        eliminarProducto(id)
    }
    const cancelarEdithandle = () =>{
        setVerLista(true)
    }

    useEffect(() => {
        fetchProductos();        
    }, []);
    // console.log('productosState:', productosState); 
    return (
        <>  {
            verLista ?
                <div>
                    <h1>Productos: </h1>
                    <hr />
                    {productosState.map(producto => (
                        <Card
                            key={producto._id}
                            imagen={producto.image}
                            titulo={producto.title}
                            descrpcion={producto.description}
                            precio={producto.price}
                            editarHandle={() => editarHandle(producto)}
                            eliminarHandle={() => eliminarHandle(producto.id)} />
                    ))}
                </div>
                : <div>
                    <EditarProductoPage 
                    producto={producto}
                    cancelarhandle={cancelarEdithandle}/>
                </div>
        }

        </>
    )
}
