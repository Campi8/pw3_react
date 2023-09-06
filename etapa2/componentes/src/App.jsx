import { useState } from 'react'
import './App.css'
import PrimeiroComponente from './components/primeiroComponente'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>Home Principal</h1>
    <PrimeiroComponente />
    </>
  )
}

export default App
