import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LayoutPage from './Pages/Layout/Layout';
import AtividadePage from './Pages/Atividade/Index';
import Dashboard from './Pages/Dashboard/Index';
import ParticipantePage from './Pages/Participante/Index';

const routes = createBrowserRouter([
  {
    path: "/",
    element: <LayoutPage />,
    children: [
      {
        index:true,
        element: <Dashboard />
      },
      {
        path : "/atividade",
        element: <AtividadePage />
      },
      {
        path: "/participante",
        element: <ParticipantePage />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
 <RouterProvider  router={routes}/>
)
