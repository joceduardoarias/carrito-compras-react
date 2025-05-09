import React from 'react'
import { Routes, Route, NavLink } from 'react-router-dom'
import { NavBar } from './components/NavBar'
import { ProductosPage } from './pages/ProductosPage'
import { ProductosProvider } from './context/ProductosProvider'
import {EditarProductoPage} from './pages/EditarProductoPage'

export const ProductosApp = () => {
    return (
        <>
            <ProductosProvider>
                <NavBar></NavBar>
                <Routes>
                    <Route path='/' element={<ProductosPage />} /> 
                    <Route path="/editar-producto" element={<EditarProductoPage />} />                   
                    <Route path='/*' element={<NavLink to='/' />} />
                </Routes>
            </ProductosProvider>
        </>
    )
}
