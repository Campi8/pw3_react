import './App.css'
import Fragmentos from './components/Fragmentos'

function App() {
  return (
    <main>
      <h1> Pagina Principal do app</h1>
      <div>
        <Fragmentos marca="FIAT" km={0} modelo="Uno" usado={false} />
      </div>
    </main>
  )
}

export default App
