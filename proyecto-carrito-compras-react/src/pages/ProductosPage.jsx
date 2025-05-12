import React, { useContext, useState, useEffect } from 'react';
import { Card } from '../components/Card';
import { ProductosContext } from '../context/ProductosContext';
import { EditarProductoPage } from './EditarProductoPage';
import { Modal, Button } from 'react-bootstrap';

export const ProductosPage = () => {
    const { fetchProductos, eliminarProducto, productosState } = useContext(ProductosContext);

    const [verLista, setVerLista] = useState(true)
    const [producto, setProducto] = useState({})
    const [showModal, setShowModal] = useState(false)
    const [productoAEliminar, setProductoAEliminar] = useState(null) 

    const editarHandle = (producto) => {
        setProducto(producto);
        setVerLista(false)
    };

    const eliminarHandle = (id) => {
        console.log(id)
        
        setProductoAEliminar(id) 
        setShowModal(true) 
    };

    const confirmarEliminar = async () => {
        await eliminarProducto(productoAEliminar) 
        fetchProductos()
        setShowModal(false) 
    };

    const cancelarEliminar = () => {
        setProductoAEliminar(null);
        setShowModal(false)
    };

    const cancelarEdithandle = () => {
        setVerLista(true)
    };

    useEffect(() => {
        fetchProductos()
    }, [])

    return (
        <>
            {verLista ? (
                <div>
                    <h1>Productos: </h1>
                    <hr />
                    {productosState.map((producto) => (
                        <Card
                            key={producto._id}
                            imagen={producto.image}
                            titulo={producto.title}
                            descrpcion={producto.description}
                            precio={producto.price}
                            editarHandle={() => editarHandle(producto)}
                            eliminarHandle={() => eliminarHandle(producto._id)} // Llama a eliminarHandle
                        />
                    ))}
                </div>
            ) : (
                <div>
                    <EditarProductoPage producto={producto} cancelarhandle={cancelarEdithandle} />
                </div>
            )}

            {/* Modal de confirmación */}
            <Modal show={showModal} onHide={cancelarEliminar}>
                <Modal.Header closeButton>
                    <Modal.Title>Confirmar eliminación</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    ¿Estás seguro de que deseas eliminar este producto? Esta acción no se puede deshacer.
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={cancelarEliminar}>
                        Cancelar
                    </Button>
                    <Button variant="danger" onClick={confirmarEliminar}>
                        Eliminar
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};