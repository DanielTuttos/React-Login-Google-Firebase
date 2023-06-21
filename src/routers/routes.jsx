import React from 'react'
import { Home } from '../pages/Home'
import { Login } from '../pages/Login'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'

export const MyRoutes = () => {

  const { user } = UserAuth();

  const RequireAuth = ({children}) => {
    return user ? children : <Navigate to={'/login'} />
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<RequireAuth><Home /></RequireAuth>} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}