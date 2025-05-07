import React from 'react'
import { Routes, Route, NavLink } from 'react-router-dom'
import { NavBar } from './components/NavBar'
import { ComprasPage } from './pages/ComprasPage'
import { CarritoPage } from './pages/CarritoPage'
import { ProductosProvider } from './context/ProductosProvider'
import { CarritoProvider } from './context/CarritoProvider'

export const CarritoApp = () => {
    return (
        <>
            <ProductosProvider>
                <CarritoProvider>
                    <NavBar></NavBar>
                    <Routes>
                        <Route path='/' element={<ComprasPage />} />
                        <Route path='/carrito' element={<CarritoPage />} />
                        <Route path='/*' element={<NavLink to='/' />} />
                    </Routes>
                </CarritoProvider>
            </ProductosProvider>
        </>
    )
}
