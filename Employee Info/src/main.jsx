import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


import App from './App.jsx'



import HomePage from './Pages/HomePage.jsx'
import LoginPage from './Pages/LoginPage.jsx'
import SearchPage from './Pages/Searchpage.jsx'
import AddEmployee from './Componants/AddEmployee.jsx'
import AddEmpPage from './Pages/AddEmpPage.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <LoginPage/> */}
    {/* <HomePage/> */}
    {/* <SearchPage/> */}
    {/* <AddEmpPage/> */}
  </StrictMode>,
)
