import React, { useContext, useState, useEffect } from 'react';
import { Card } from '../components/Card';
import { ProductosContext } from '../context/ProductosContext';
import { EditarProductoPage } from './EditarProductoPage';
import { AgregarProducto } from './AgregarProducto';
import { Modal, Button } from 'react-bootstrap';
import { UsuariosContext } from '../context/UsuariosProvider';

export const ProductosPage = () => {
    const { fetchProductos, eliminarProducto, productosState } = useContext(ProductosContext);
    const {usuario} = useContext(UsuariosContext)    
    const [verLista, setVerLista] = useState(true);
    const [producto, setProducto] = useState({});
    const [agregarProducto, setAgregarProducto] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [productoAEliminar, setProductoAEliminar] = useState(null);

    const editarHandle = (producto) => {
        setProducto(producto);
        setVerLista(false);
    };

    const agregarHandle = () => {
        setAgregarProducto(true);
        setVerLista(false);
    };

    const eliminarHandle = (id) => {
        setProductoAEliminar(id);
        setShowModal(true);
    };

    const confirmarEliminar = async () => {
        await eliminarProducto(productoAEliminar);
        fetchProductos();
        setShowModal(false);
    };

    const cancelarEliminar = () => {
        setProductoAEliminar(null);
        setShowModal(false);
    };

    const cancelarhandle = () => {
        setVerLista(true);
        setAgregarProducto(false);
    };

    useEffect(() => {
        fetchProductos();
        console.log(usuario)
    }, []);

    return (
        <>
            {verLista ? (
                <div>
                    <h1>Productos: </h1>
                   {usuario.role == 'admin' ?  <button className="btn btn-success mb-3" onClick={agregarHandle}>
                        Agregar Producto
                    </button>
                    : <></>
                    }
                    <hr />
                    {productosState.map((producto) => (
                        <Card
                            key={producto._id}
                            imagen={producto.image || 'https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg'}
                            titulo={producto.title}
                            descrpcion={producto.description}
                            precio={producto.price}
                            editarHandle={() => editarHandle(producto)}
                            eliminarHandle={() => eliminarHandle(producto._id)}
                        />
                    ))}
                </div>
            ) : agregarProducto ? (
                <AgregarProducto cancelarhandle={cancelarhandle} />
            ) : (
                <EditarProductoPage producto={producto} cancelarhandle={cancelarhandle} />
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