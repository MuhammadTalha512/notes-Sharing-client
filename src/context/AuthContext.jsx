import React, { createContext, useContext, useEffect, useReducer, useState } from "react"
import axios from "axios"

const AuthContext = createContext()

const initialState = {
  isAuth: false,
  user: null,
}

const reducer = (state, { type, payload }) => {
  switch (type) {
    case "SET_LOGGED_IN":
      return { isAuth: true, user: payload }
    case "SET_LOGGED_OUT":
      return initialState
    default:
      return state
  }
}

const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const [isAppLoading, setIsAppLoading] = useState(true)

  useEffect(() => {
    const token = localStorage.getItem("Token")
    if (!token) {
      setInterval(() => {
        setIsAppLoading(false)
      }, 2000)
      return
    }

    const API = import.meta.env.VITE_API_URL

    axios
      .get(`${API}/api/auth/profile`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        dispatch({ type: "SET_LOGGED_IN", payload: res.data.user })
      })
      .catch(() => {
        localStorage.removeItem("Token")
        dispatch({ type: "SET_LOGGED_OUT" })
      })
      .finally(() => setIsAppLoading(false))
  }, [])

  const handleLogin = (userData, token) => {
    localStorage.setItem("Token", token)
    dispatch({ type: "SET_LOGGED_IN", payload: userData })
  }

  const handleLogout = () => {
    localStorage.removeItem("Token")
    dispatch({ type: "SET_LOGGED_OUT" })
  }

  return (
    <AuthContext.Provider
      value={{
        state,          
        dispatch,
        isAppLoading,          
        handleLogin,   
        handleLogout,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuthContext = () => useContext(AuthContext)

export default AuthContextProvider
