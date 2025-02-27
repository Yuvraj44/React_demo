import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import LogIn from './Componants/LogIn.jsx'

import NavBar from './Componants/NavBar.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NavBar/ >
  </StrictMode>,
)
