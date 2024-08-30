import React from 'react';
import { useEffect, useState } from "react";
import axios from "axios";
import Login from './Components/Pages/Login';
import Dashboard from "./Components/Pages/Dashboard";
import ProtectedRoute from "./Components/Pages/ProtectedRoute";
import { Route, Routes } from "react-router-dom";


const App = () => {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<ProtectedRoute />}>
          <Route index element={<Dashboard />} />
        </Route>
      </Routes>
    </>
  );
}
 
export default App;
