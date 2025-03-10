import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";


import SearchPageById from "./Pages/SearchPageById"
import AddEmpPage from "./Pages/AddEmpPage";
import UpdateEmpPage from "./Pages/UpdateEmpPage";
import DeleteEmpPage from "./Pages/DeleteEmpPage";
import HomePage from "./Pages/HomePage";
import LoginPage from "./Pages/LoginPage";

import SearchBarById from "./Componants/SeachBarById";
import SearchBarByDept from "./Componants/SearchBarByDept";
import SearchPageByDept from "./Pages/SearchPageByDept";
import SearchBarByName from "./Componants/SearchBarByName";
import SearchPageByName from "./Pages/SearchPageByName";
import ViewEmployeePage from "./Pages/ViewEmployeePage";

const EmployeeRoutes = () => {
  const location = useLocation();
  return (
    <div>
      <Routes>
        <Route path="" element={<LoginPage />}></Route>
        <Route path="signout" element={<LoginPage />}></Route>
        <Route path="admin" element={<HomePage />}></Route>
        <Route path="user" element={<HomePage />}></Route>
        <Route path="searchById" element={<SearchPageById />}></Route>
        <Route path="searchByDept" element={<SearchPageByDept />}></Route>
        <Route path="searchByName" element={<SearchPageByName />}></Route>
        <Route path="add" element={<AddEmpPage />}></Route>
        <Route path="edit" element={<UpdateEmpPage />}></Route>
        <Route path="delete" element={<DeleteEmpPage />}></Route>
        <Route path="view" element={<ViewEmployeePage />}></Route>


      </Routes>
    </div>
  );
};

export default EmployeeRoutes;
