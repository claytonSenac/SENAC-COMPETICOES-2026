import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { CadastroCliente } from './Pages/CadastroCliente/CadastroCliente'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CadastroCliente />
  </StrictMode>,
)
