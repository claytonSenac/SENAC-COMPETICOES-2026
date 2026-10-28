import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Pages/Layout'
import Home from './Pages/Home'
import Adminpage from './Pages/PainelAdmin'
import PainelParticipante from './Pages/PainelParticipante'

const r = createBrowserRouter([
  {
    element: <Layout />,
    path: "",
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "/admin/:id",
        element: <Adminpage />
      },
      {
        path:"participante/:id",
        element:<PainelParticipante />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={r} />
)
