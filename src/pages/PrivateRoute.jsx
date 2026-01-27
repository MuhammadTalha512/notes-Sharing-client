import React from 'react'
import { useAuthContext } from '../context/AuthContext'
import { Navigate } from 'react-router-dom'

const PrivateRoute = ({children}) => {

    const {state} = useAuthContext()
    const {isAuth} = state

    if(!isAuth) return <Navigate to='/auth/login' />

  return (children)
}

export default PrivateRoute