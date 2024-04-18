import React from "react";
import Dashboard from "./Components/Dashboard/Dashboard";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login } from "./Components/Auth/Login";
import { Test } from "./Components/Pages/Test";

export const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="/dashboard/Test" element={<Test />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
};
