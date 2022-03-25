import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./components/Dashboard.js";
import InnerContent from "./components/InnerContent.js";
import ContentPage from "./components/ContentPage.js";
import SettingsPage from "./components/SettingsPage.js";
import Login from "./components/Login.js";
import Signup from "./components/Signup.js";
import Navbar from "./components/Navbar.js";
import ProtectedRoutes from "./components/ProtectedRoutes.js";
import PublicRoutes from "./components/PublicRoutes.js";
import "./App.css";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<ProtectedRoutes />}>
          <Route path="/" element={<InnerContent />}>
            <Route path="/" element={<Navigate replace to="dashboard" />} />
            <Route path="/dashboard" element={<Dashboard />}></Route>
            <Route path="/content" element={<ContentPage />}></Route>
            <Route path="/settings" element={<SettingsPage />}></Route>
          </Route>
        </Route>

        {/* <Route path="/login" element={<PublicRoutes />}> */}
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>

        {/* </Route> */}
        {/* </Route> */}
      </Routes>
    </div>
  );
}

export default App;
