import React from 'react'
import ListaFragmentos from './ListaFragmentos'

const Fragmentos = (argumentos) => {
  const motos = [
    {id: 1, marca: "Honda", modelo: "XRE 300", km: 1200, usado: true, ano: 2005},
    {id: 2, marca: "Honda", modelo: "Titan 160", km: 0, usado: false, ano: 2005},
    {id: 3, marca: "Yamaha", modelo: "Factor 250", km: 3300, usado: true, ano: 2005},
    {id: 4, marca: "Honda", modelo: "Start 150", km: 0, usado: false, ano: 2005},
  ]
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
    <div>
      <ListaFragmentos listaMotos={motos}/>
    </div>
    </>
  )
}

export default Fragmentos