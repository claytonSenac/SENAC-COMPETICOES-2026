import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { CalculadoraIMC } from './Components/CalculadoraIMC/CalculadoraIMC'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CalculadoraIMC />
  </StrictMode>,
)
