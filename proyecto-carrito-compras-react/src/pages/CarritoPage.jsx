import React, { useContext } from 'react'
import { CarritoContext } from '../context/CarritoContext'

export const CarritoPage = () => {

  const { listaCompras, agregarCompra, disminuirCantidad, aumentarCantidad, eliminarCompra } = useContext(CarritoContext)

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Precio</th>
            <th scope="col">Cantidad</th>
            <th scope="col">Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {
            listaCompras.map(item => (
              <tr key={item.id}>
                <th scope="row">{item.title}</th>
                <td>{item.price}</td>
                <td>1</td>
                <td><button
                  type='button'
                  className='btn btn-danger'
                  onClick={eliminarCompra}></button></td>
              </tr>
            ))
          }

        </tbody>
      </table>
      <div className='d-grid gap-2'>
        <button className='btn btn-primary'> Comprar</button>
      </div>
    </>
  )
}
