import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import Login from './Pages/Login';
import Register from './Pages/Register';
import ContextProvaider from './ContaxtApi/ContextProvaider';
import Home from './Pages/Home';
import PrivateComponent from './PrivateComponent/PrivateComponent';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path:"/login",
        element:<Login></Login>
      },
      {
        path:"/singUp",
        element:<Register></Register>
      },
      {
        path:"/",
        element:<PrivateComponent>
          <Home></Home>
        </PrivateComponent>
      }
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <ContextProvaider>
      <RouterProvider router={router} />
   </ContextProvaider>
  </React.StrictMode>,
)
