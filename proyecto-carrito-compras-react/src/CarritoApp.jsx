import React from 'react'
import { Routes, Route, NavLink } from 'react-router-dom'
import { NavBar } from './components/NavBar'
import { ComprasPage } from './pages/ComprasPage'
import { CarritoPage } from './pages/CarritoPage'

export const CarritoApp = () => {
    return (
        <>
            <NavBar></NavBar>
            <Routes>
                <Route path='/' element={<ComprasPage/>}/>
                <Route path='/carrito' element={<CarritoPage/>}/>
                <Route path='/*' element={<NavLink to='/'/>}/>
            </Routes>
        </>
    )
}
