import { useEffect } from 'react'
import './App.css'
import { Relogio } from './components/Relogio/Relogio'

function App() {

  useEffect(() => {
    console.log('Aplicacao CARREGADA')
  },[])
  return (
    <>
      <Relogio />
    </>
  )
}

export default App
