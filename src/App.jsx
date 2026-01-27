import { useState } from 'react'
import './App.css'
import Routes from "./pages/Routes"
import { useAuthContext } from './context/AuthContext'
import ScreenLoader from './components/common/ScreenLoader'

function App() {
const {isAppLoading} = useAuthContext()
  return (
    <>
    {isAppLoading 
    ?<ScreenLoader /> 
    :<Routes />
  }
    </>
  )
}

export default App
