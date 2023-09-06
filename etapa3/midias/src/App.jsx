import { useState } from 'react'
import banner1 from './assets/img/1.png';
import './App.css'
import BannerController from './conponents/BannerController';

function App() {
  const [count, setCount] = useState(0)
  const w=600
  const h=240

  return (
    <>
    <div>
       <nav>
        cabeçalho
      </nav>
      <div>
       <img src={banner1} alt="banner anuncio" width={w} height={h} />
      </div>
      <div>
        <BannerController />
      </div>
    </div>
    </>
  )

}

export default App
