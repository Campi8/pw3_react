import { useState } from "react"

const GestorDados = () => {
    let somaNumero = 10

    //construtor HOOK
    //get set 
    const [numero, setNumero] = useState(15)

    console.log(numero)

    return(
        <div>
            <p>
                valor de Número é: {somaNumero}.
            </p>
            <button onClick={() => (somaNumero = 15)}> Muda Valor </button>
            <p>
                valor de HOOK: {numero}
            </p>
            <button onClick={() => setNumero(25)}> Muda por HOOK </button>
        </div>
    )
}

export default GestorDados