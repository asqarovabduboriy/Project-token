import './App.css'
import { Route, Routes, Navigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Login from './page/login/Login'
import Home from './page/Home/Home'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Registir from './components/registir/Registir'

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

    const token = localStorage.getItem('token')
 
    useEffect(() => {
      if (token) {
        setIsAuthenticated(true)
      }
    }, [token])


  return (
    <>
      <Routes>
        <Route path='/login' element={isAuthenticated ? <Navigate to="/" /> : <Login setIsAuthenticated={setIsAuthenticated}/> } />
        <Route path='/' element={isAuthenticated ? <Home /> : <Navigate to="/login" />} />
        <Route path='/register' element={<Registir/>}/>
      </Routes>

      <ToastContainer/>
    </>
  )
}

export default App
