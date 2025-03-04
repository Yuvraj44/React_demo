import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import SearchPage from "./Pages/Searchpage";
import AddEmpPage from "./Pages/AddEmpPage";
import UpdateEmpPage from "./Pages/UpdateEmpPage";
import DeleteEmpPage from "./Pages/DeleteEmpPage";
import HomePage from "./Pages/HomePage";
import LoginPage from "./Pages/LoginPage";
import NavBar from "./Componants/NavBar";
import AddEmployee from "./Componants/AddEmployee";
import UserHomePage from "./Pages/UserHomePage"
const EmployeeRoutes = () => {
  const location = useLocation();
  return (
    <div>
      <Routes>
        <Route path="" element={<LoginPage />}></Route>
        <Route path="signout" element={<LoginPage />}></Route>
        <Route path="admin" element={<HomePage />}></Route>
        <Route path="user" element={<UserHomePage />}></Route>
        <Route path="search" element={<SearchPage />}></Route>
        <Route path="add" element={<AddEmpPage />}></Route>
        <Route path="edit" element={<UpdateEmpPage />}></Route>
        <Route path="delete" element={<DeleteEmpPage />}></Route>

      </Routes>
    </div>
  );
};

export default EmployeeRoutes;
