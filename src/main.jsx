import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root.jsx';
import Home from './components/Home/Home.jsx';
import Register from './components/Register/Register.jsx';
import Login from './components/Login/Login.jsx';
import Brands from './components/Brands/Brands.jsx';
import AuthProvider from './Providers/AuthProvider.jsx';
import MyProfile from './components/MyProfile/MyProfile.jsx';
import PrivateRoute from './routes/privateRoute.jsx';
import Error from './components/Error/Error.jsx';
import BrandDetails from './components/BrandDetails/BrandDetails.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/brands",
        element: <Brands></Brands>
      },
      {
        path: 'brands/:_id',
        element: <PrivateRoute><BrandDetails></BrandDetails></PrivateRoute>,
        loader: () => fetch('/couponData.json')
      },
      {
        path: "/myprofile",
        element: <PrivateRoute><MyProfile></MyProfile></PrivateRoute>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
