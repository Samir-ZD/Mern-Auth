import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {createBrowserRouter, createRoutesFromElements, Route, Router, RouterProvider} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'

import LoginPage from './pages/LoginPage.jsx'
import RegisterPage from './pages/RegisterPage.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/'element={<App/>}>
    <Route  path='/login'element={<LoginPage/>}/>
    <Route  path='/register'element={<RegisterPage/>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
