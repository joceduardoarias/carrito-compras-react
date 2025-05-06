import React from 'react'
import { useState, useEffect } from 'react'

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
    <div>ComprasPage</div>
  )
}
