import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Pages/Layout/Layout';
import Home from './Pages/Home';
import Atividades from './Pages/Atividade';
import Participantes from './Pages/Participante';

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index:true,
        element: <Home />
      },
      {
        path: "/atividade",
        element: <Atividades />
      },
      {
        path: "/participante",
        element: <Participantes />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={routes} />
)
