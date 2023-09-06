const TerceiroComponente = () => {
    const professor ={
        nome: "Gustavo Campi",
        area: "Tecnologia da Informação",
        formacao: "Ciencias da Computação",
        titular: true
    }

    return(
        <div>
            <strong>Nome: </strong>{professor.nome}<br />
            <strong>Área: </strong>{professor.area}<br />
            <strong>Formação: </strong>{professor.formacao}<br />
            <strong>Contrato: </strong>{professor.titular ? 'Sim' : 'Não'}<br />
        </div>
    );
}

export default TerceiroComponente;