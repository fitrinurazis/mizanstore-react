import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import DetailProduct from './pages/Detail Products/DetailProduct.jsx'

const root = createBrowserRouter([
  {
    path:"/",
    element:<App/>
  }, {
    path:"details/:id",
    element:<DetailProduct/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={root} />
  </React.StrictMode>,
)
