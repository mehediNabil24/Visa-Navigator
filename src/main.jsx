import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './Components/Layout.jsx';
import Home from './Components/Home.jsx';
import AddVisa from './Components/AddVisa.jsx';
import AllVisa from './Components/AllVisa.jsx';
import VisaDetails from './Components/VisaDetails.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: '/',
        element: <Home></Home>

      },
      {
        path:'/addVisa',
        element: <AddVisa></AddVisa>

      },
      {
        path: '/allVisa',
        element:<AllVisa></AllVisa>,
        loader: ()=> fetch('http://localhost:5000/visa')
      },
      {
        path:'/visaDetails/:id',
        element: <VisaDetails></VisaDetails>,
        loader: ({params})=> fetch(`http://localhost:5000/visa/${params.id}`)
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
