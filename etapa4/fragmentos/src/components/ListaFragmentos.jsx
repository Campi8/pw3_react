import React from 'react'

const ListaFragmentos = (motos) => {
  return (
    <>
    <table>
        <tr>
            <th>Marca</th>
            <th>Modelo</th>
            <th>Km</th>
            <th>Usado</th>
            <th>Ano</th>
        </tr>
        {motos.map((itemMoto) => {
            <tr>
                <tr key={itemMoto.id}/>
                <td>{itemMoto.marca}</td>
                <td>{itemMoto.modelo}</td>
                <td>{itemMoto.km}</td>
                <td>{itemMoto.usado ? "Usado": "Novo" }</td>
                <td>{itemMoto.ano}</td>
            </tr>
        })}
    </table>
    </>
  )
}

export default ListaFragmentos