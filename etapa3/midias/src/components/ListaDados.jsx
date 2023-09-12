import { useState } from "react"


const ListaDados = () => {

    const [User, setUser] = useState([
        {id: 1, nome: 'astoilfo Pirulito', idade: 32},
        {id: 2, nome: 'astoilfo Diniz', idade: 12},
        {id: 3, nome: 'Basculino Andre', idade: 33},
        {id: 4, nome: 'Gilbertao Rodolfo', idade: 98},
        {id: 5, nome: 'Djalma Felizardo', idade: 44},
        {id: 6, nome: 'Sandro Sayajin', idade: 18},
        {id: 7, nome: 'Kuramandro Despincio', idade: 15},
        {id: 8, nome: 'Ristoncio Aleonardo', idade: 22},
    ])

    const apagarUsuario = () => {
        const aleatorio = Math.floor(Math.random() * User.length)

        setUser((prev) => {
            console.log(prev)
            return prev.filter((itemUser) => aleatorio !== User.id)
        })
    }

    return(
        <div>
            <table> 
                <tr>
                    <th>id</th>
                    <th>nome</th>
                    <th>idade</th>
                </tr>
                {User.map((tableItem) => (
                    <tr key={tableItem.id}>
                        <td>{tableItem.id}</td>
                        <td>{tableItem.nome}</td>
                        <td>{tableItem.idade}</td>
                    </tr>
                    ))}
            </table>
            <ul>
                {User.map((item) => (
                    <li key={item.id}> {item.nome} | {item.idade} </li>
                ))}
            </ul>
            <div>
                <button onClick={apagarUsuario}> Roleta Russa </button>
            </div>
        </div>
    )
}

export default ListaDados