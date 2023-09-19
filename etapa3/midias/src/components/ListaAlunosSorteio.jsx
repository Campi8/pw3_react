import { useState } from "react"

const ListaAlunosSorteio = () =>{
    const [alunos,setAlunos] = useState([
        {id: 1, nome:'Breno Silva', idade: 20},
        {id: 2, nome:'Fábio Bernardelli', idade: 17},
        {id: 3, nome:'Gabriel Rodrigues', idade: 22},
        {id: 4, nome:'Gustavo Afonso', idade: 28},
        {id: 5, nome:'Gustavo Caruzo', idade: 17},
        {id: 6, nome:'Gustavo Campi', idade: 18},
        {id: 7, nome:'Igor Afonso', idade: 24},
        {id: 8, nome:'Izabela Souza', idade: 33},
        {id: 9, nome:'João Pedro Alves', idade: 18},
        {id: 10, nome:'João Pedro de Oliveira', idade: 19},
        {id: 11, nome:'João Victor de Souza', idade: 22},
        {id: 12, nome:'Kamily Simeão', idade: 18},
        {id: 13, nome:'Leandro de Jesus', idade: 18},
        {id: 14, nome:'Olga Lopes', idade: 18},
        {id: 15, nome:'Rafael Luz', idade: 27},
        {id: 16, nome:'Rafael Calera', idade: 19},
        {id: 17, nome:'Ruan Palhares', idade: 20}
    ])

    const apagarAluno = () => {
        const aleatorio = Math.floor(Math.random() * alunos.length)
        console.log(aleatorio)

        setAlunos((prevAlunos) => {
            console.log(prevAlunos)
            return prevAlunos.filter((alunos) => aleatorio !== alunos.id)
        })
    }

    return(
        <div>
            <table>
                <tr>
                    <th>id</th>
                    <th>nome</th>
                    <th>Idade</th>
                </tr>
                {alunos.map((tableItem) =>(
                    <tr key={tableItem.id}>
                        <td>{tableItem.id}</td>
                        <td>{tableItem.nome}</td>
                        <td>{tableItem.idade}</td>
                    </tr>
                ))}
            </table>
            <div>
                <button onClick={apagarAluno}>Retirar Aluno</button>
            </div>
        </div>
    )
}

export default ListaAlunosSorteio