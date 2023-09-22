import './App.css'
import Fragmentos from './components/Fragmentos'
import FuncaoFragmento from './components/FuncaoFragmento'
import ListaFragmentos from './components/ListaFragmentos'

function App() {
  function exibirMensagem(){
    console.log("Função que trasita entre componentes")
  }
  const motos = [
    {id: 1, marca: "Honda", modelo: "XRE 300", km: 1200, usado: true, ano: 2005},
    {id: 2, marca: "Honda", modelo: "Titan 160", km: 0, usado: false, ano: 2005},
    {id: 3, marca: "Yamaha", modelo: "Factor 250", km: 3300, usado: true, ano: 2005},
    {id: 4, marca: "Honda", modelo: "Start 150", km: 0, usado: false, ano: 2005},
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
    </main>
  )
}

export default App
