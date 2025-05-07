import React from 'react'
import { useState, useEffect } from 'react'
import { Card } from '../components/Card'

export const ComprasPage = () => {
    const [productos, setProductos] = useState([])

    const fetchProductos = async () => {
        const response = await fetch('https://fakestoreapi.com/products')
        const data = await response.json()
        setProductos(data)
        console.log(data);        
    }

    //Cuando carga el componente ejecuta una sola vez useEffect
    //y obtiene los productos
    useEffect(() => {
        fetchProductos()

    }, [])

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
