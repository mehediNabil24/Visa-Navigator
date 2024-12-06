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
import UserVisaList from './Components/UserVisaList.jsx';
import AuthProvider from './Components/AuthProvider.jsx';
import Login from './Components/Login.jsx';
import Register from './Components/Register.jsx';
import PrivateRoutes from './Components/PrivateRoutes.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: ()=> fetch('http://localhost:5000/visa')

      },
      {
        path:'/addVisa',
        element: <PrivateRoutes><AddVisa></AddVisa></PrivateRoutes>

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
      },
      {
        path:'/userVisaList',
        element: <UserVisaList></UserVisaList>

      },
      {
        path:'/login',
        element: <Login></Login>
      },
      {
        path:'/register',
        element: <Register></Register>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider><RouterProvider router={router} /></AuthProvider>
  </StrictMode>,
)
