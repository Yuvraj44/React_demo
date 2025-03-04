import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import App from "./App.jsx";
import NavBar from "./Componants/NavBar.jsx";
import HomePage from "./Pages/HomePage.jsx";
import LoginPage from "./Pages/LoginPage.jsx";
import SearchPage from "./Pages/Searchpage.jsx";
import AddEmployee from "./Componants/AddEmployee.jsx";
import AddEmpPage from "./Pages/AddEmpPage.jsx";
import UpdateEmpPage from "./Pages/UpdateEmpPage.jsx";
import HomePageData from "./Componants/PageData.jsx";
import DeleteEmployee from "./Componants/DeleteEmployee.jsx";
import DeleteEmpPage from "./Pages/DeleteEmpPage.jsx";
import UserHomePage from "./Pages/UserHomePage.jsx"

import EmpDetailsList from "./Componants/EmpDetailsList.jsx";
import UpdateEmployee from "./Componants/UpdateEmployee.jsx";
import UserNavBar from "./Componants/UserNavBar.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
