import { useState } from 'react'
import banner3 from '../assets/img/5.png'

const AppTamanhoImagem = () => {
    const imgPadrao = {
        w: 600,
        h: 240
    }

    const [altura, SetAltura] = useState(imgPadrao.h)
    const [largura, SetLargura] = useState(imgPadrao.w)

    
    return(

        <div>
            <img src={banner3} alt="Banner de promoções 3" width={imgPadrao.w} height={imgPadrao.h} />

            
            <div>
            <button onClick={() => SetLargura(largura+10)}> Alargar  <button> || </button> onClick={() => SetAltura(largura-10)} </button>
            <button onClick={() => SetAltura(altura+10)}> Ampliar  <button> || </button> onClick={() => SetAltura(altura-10)} </button>
            </div>

            <div>
                <span> Largura: {imgPadrao.w} </span> || <span> Altura: {imgPadrao.h}</span>
            </div>

        </div>
    )
}

export default AppTamanhoImagem