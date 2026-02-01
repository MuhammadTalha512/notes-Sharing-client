import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import AuthContextProvider from './context/AuthContext.jsx'
import { ConfigProvider } from 'antd'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <ConfigProvider theme={{token: {colorPrimary: "#4F39F6" }, components:{Button: {controlOutlineWidth: 0}}}}>
    <AuthContextProvider>
    <App />
    </AuthContextProvider>
    </ConfigProvider>
    </BrowserRouter>
  </StrictMode>,
)
