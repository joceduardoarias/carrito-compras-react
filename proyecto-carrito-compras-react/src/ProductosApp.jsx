import React from 'react'
import { Routes, Route, NavLink } from 'react-router-dom'
import { NavBar } from './components/NavBar'
import { ProductosPage } from './pages/ProductosPage'
import { ProductosProvider } from './context/ProductosProvider'
import { EditarProductoPage } from './pages/EditarProductoPage'
import 'bootstrap/dist/css/bootstrap.min.css';
import { UsuariosProvider } from './context/UsuariosProvider'
import { LoginPage } from "../src/pages/LoginPage"
import Protected from '../../../../React/book-store/src/protected/Protected'


export const ProductosApp = () => {
    return (


        <UsuariosProvider>
            <ProductosProvider>
                <NavBar></NavBar>
                <Routes>
                    <Route path='login' element={<LoginPage />} />
                    <Route element={<Protected />}>
                        <Route path='/' element={<ProductosPage />} />
                        <Route path="/editar-producto" element={<EditarProductoPage />} />
                        <Route path='/*' element={<NavLink to='/' />} />
                    </Route>
                </Routes>
            </ProductosProvider>
        </UsuariosProvider>


    )
}
