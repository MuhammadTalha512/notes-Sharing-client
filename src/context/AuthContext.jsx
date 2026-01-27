import React, { createContext, useContext, useEffect, useReducer, useState } from 'react'

const AuthContext = createContext()

const initialState = { isAuth: null, user: {} }

const reducer = (state, { action, payload }) => {
  switch (action) {
    case "SET_LOGGED_IN":
      return { ...state, isAuth: true, user: payload.user }

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
    const loggedUser = localStorage.getItem("loggedInUser")
    if (loggedUser) {
      dispatch({
        action: "SET_LOGGED_IN",
        payload: { user: JSON.parse(loggedUser) },
      })
    }

    setTimeout(() => {
      setIsAppLoading(false)
    }, 1000)
  }, [])

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser") 
    dispatch({ action: "SET_LOGGED_OUT" }) 
  }

  return (
    <AuthContext.Provider value={{ state, dispatch, isAppLoading, handleLogout }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider

export const useAuthContext = () => useContext(AuthContext)
