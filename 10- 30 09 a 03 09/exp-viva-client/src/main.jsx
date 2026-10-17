import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Pages/Layout';
import Home from './Pages/Home';
import Participante from './Pages/Participante';
import Admin from './Pages/Admin';

const r = createBrowserRouter([
  {
    path:"/",
    element: <Layout />,
    children: [
      {
        index:true,
        element: <Home />
      },
      {
        path: "participante/:id",
        element: <Participante />
      },
      {
        path: "admin/:id",
        element: <Admin />
      },

    ]
  }
])

createRoot(document.getElementById('root')).render(
  <RouterProvider  router={r}/>
)
