import React, { Component } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Auth from './Auth'
import Frontend from './Frontend'
import { useAuthContext } from '../context/AuthContext'
import Dashboard from './Dashboard'
import PrivateRoute from './PrivateRoute'

const Index = () => {
  const {state} = useAuthContext()
  const {isAuth} = state
  return (
    <Routes>
        <Route path='/*' element={<Frontend />} />
        <Route path='/auth/*' element={!isAuth ? <Auth /> : <Navigate to='/' />} />
        <Route path='/dashboard/*'  element={<PrivateRoute><Dashboard /></PrivateRoute>} />
      
    </Routes>
  )
}

export default Index