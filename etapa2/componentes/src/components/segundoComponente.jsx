import TerceiroComponente from "./terceiroComponente";

const SegundoComponente = () => {
    const aluno = {
        nome: 'João',
        idade: 16,
        curso: 'Informática',
        cidade: 'São Paulo',
        estado: 'SP',
        pais: 'Brasil',
        matriculado: true
    }

        const renderizadorAluno = (x) => {
            if (x) {
                return<h1>Cursando</h1>
            }else{
                return<h1>Desistente</h1>
            }
        }
        
    return (
        <div>
            <div>
                <strong>Nome: </strong>{aluno.nome}<br />
                <strong>Idade: </strong>{aluno.idade}<br />
                <strong>Curso: </strong>{aluno.curso}<br />
                <strong>Cidade: </strong>{aluno.cidade}<br />
                <strong>Estado: </strong>{aluno.estado}<br />
                <strong>País: </strong>{aluno.pais}<br />
                <strong>Matriculado: </strong>{aluno.matriculado ? 'Sim' : 'Não'}<br />
            </div>
            <div>
                {renderizadorAluno(aluno.matriculado)}
            </div>
            <div>
                <TerceiroComponente />
            </div>
        </div>
    );
}

export default SegundoComponente;