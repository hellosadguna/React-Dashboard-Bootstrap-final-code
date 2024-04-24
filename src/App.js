import React from "react";
import Dashboard from "./Components/Dashboard/Dashboard";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login } from "./Components/Auth/Login";
import { UploadUrl } from "./Components/Pages/UploadUrl";
import { Dashboardhome } from "./Components/Dashboard/Dashboardhome";
import { Geturls } from "./Components/Pages/Geturls";
// import { Test } from "./Components/Pages/Test";

export const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="/dashboard/homepage" element={<Dashboardhome />} />
            <Route path="/dashboard/uploadurl" element={<UploadUrl />} />
            <Route path="/dashboard/getUrls" element={<Geturls />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
};
