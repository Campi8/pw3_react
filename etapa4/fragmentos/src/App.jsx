import { useState } from 'react'
import './App.css'
import FragmentoPai from './components/FragmentoPai'
import Fragmentos from './components/Fragmentos'
import FuncaoFragmento from './components/FuncaoFragmento'
import ListaFragmentos from './components/ListaFragmentos'

function App() {
  
  function exibirMensagem(){
    console.log("Função que trasita entre componentes")
  }
  const [mensagem, setMensagem] = useState("")
  const trocaMensagem = (msg) => {
    setMensagem(msg)
  }

  const motos = [
    {id: 1, marca: "Honda", modelo: "XRE 300", km: 1200, usado: true, ano: 2000},
    {id: 2, marca: "Honda", modelo: "Titan 160", km: 0, usado: false, ano: 2020},
    {id: 3, marca: "Yamaha", modelo: "Factor 250", km: 3300, usado: true, ano: 2003},
    {id: 4, marca: "Honda", modelo: "Start 150", km: 0, usado: false, ano: 2022},
    {id: 5, marca: "Honda", modelo: "Silver 99", km: 2300, usado: true, ano: 2005},
  ]
  return (
    <main>
      <h1> Pagina Principal do app</h1>
      <div>
        <Fragmentos marca="FIAT" km={0} modelo="Uno" usado={false} />
      </div>
      <div>
        <ListaFragmentos motos={motos} />
      </div>
      <div>
       <FuncaoFragmento appFuncao = {exibirMensagem} />
      </div>
      <div>
        <FragmentoPai> 
          <p> Tratamneto de Codigos </p>
        </FragmentoPai>
      </div>
    </main>
  )
}

export default App
