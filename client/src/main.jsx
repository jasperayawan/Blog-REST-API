import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Register from './Pages/Register.jsx'
import Login from './Pages/Login.jsx'
import { ContextProvider } from './context/Context.jsx'
import Home from './Pages/Home.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <ContextProvider>
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/login' element={<Login/>}/>
    </Routes>
  </BrowserRouter>
  </ContextProvider>
)
