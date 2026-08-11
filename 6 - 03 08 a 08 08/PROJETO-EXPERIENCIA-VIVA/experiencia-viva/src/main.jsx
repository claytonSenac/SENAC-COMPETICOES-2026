import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Pages/Layout';
import Home from './Pages/Home/Home';
import Categoria from './Pages/Categoria/Categoria';
import Participante from './Pages/Participante/Participante';
import Evento from './Pages/Evento/Evento';


const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        index:true,
        element: <Home />
      },
      {
        path:"/categorias",
        element: <Categoria />
      },
      {
        path: '/Participante',
        element: <Participante /> 
      },
      {
        path: "/Evento",
        element: <Evento />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={routes} />
)

