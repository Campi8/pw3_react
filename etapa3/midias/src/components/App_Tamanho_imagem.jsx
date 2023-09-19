import { useState } from 'react'
import banner3 from '../assets/img/5.png'

const AppTamanhoImagem = () => {
    const imgPadrao = {
        w: 600,
        h: 240
    }
    const [lagura, setLargura] = useState(imgPadrao.w)
    const [altura, setAltura] = useState(imgPadrao.h)
    return(
        <div>
            <img src={banner3} alt="Banner de promoções 2" width={lagura} height={altura} />
            <div>
                <span>Largura: {lagura}</span> || <span>Altura: {altura}</span>
            </div>
            <div>
                <button onClick={()=> setLargura(lagura+10)}>Alargar</button> || <button onClick={()=> setLargura(lagura-10)}>Estreitar</button>
                <button onClick={()=> setAltura(altura+10)}>Ampliar</button>  || <button onClick={()=> setAltura(altura-10)}>Reduzir</button>
            </div>
        </div>
    )
}

export default AppTamanhoImagem