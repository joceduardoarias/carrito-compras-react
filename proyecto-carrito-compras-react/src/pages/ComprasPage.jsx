import React, { useContext } from 'react'
import { Card } from '../components/Card'
import { ProductosContext } from '../context/ProductosContext'

export const ComprasPage = () => {

    const {productos} = useContext(ProductosContext)

    return (
        <>
            <h1>Compras: </h1>
            <hr />
            {productos.map(producto => (
                <Card
                key={producto.id}
                imagen={producto.image}
                titulo={producto.title}
                descrpcion={producto.description}
                precio={producto.price} />
            ))}
        </>
    )
}
