import React from 'react'

const Fragmentos = (argumentos) => {
  return (
    <>
    <h2>Componentes de Props</h2>
    <h2>Carro ordenado</h2>
    <table>
        <tr>
            <th>Marca</th>
            <th>Km</th>
            <th>Modelo</th>
            <th>Usado</th>
        </tr>
        <tr>
            <td>{argumentos.marca}</td>
            <td>{argumentos.km}</td>
            <td>{argumentos.modelo}</td>
            <td>{argumentos.usado ? "Usado" : "Novo"}</td>
        </tr>
    </table>
    </>
  )
}

export default Fragmentos