import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import UserLoginPage from "./UserLoginPage";
import AdminLoginPage from "./AdminLoginPage";
import RegistrationPage from "./RegistrationPage";
import AdminRegistrationPage from "./AdminRegistrationPage";
import GeoTracker from './GeoTracker';
import UserLocation from "./UserLocation";
import UserAttendance from "./UserAttendance";
import AdminUpdateCollege from "./AdminUpdateCollege";

const AppLayout = () => {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<GeoTracker />} />

        <Route path="/user/register" element={<RegistrationPage />} />
        <Route path="/admin/register" element={<AdminRegistrationPage />} />

        <Route path="/user/login" element={<UserLoginPage />} />
        <Route path="/admin/login" element={<AdminLoginPage />} />

        <Route path="/user/userlocation/:userId" element={<UserLocation />} />
        <Route path="/user/:userId/attendance" element={<UserAttendance />} />

        <Route path="/admin/updatecollege" element={<AdminUpdateCollege />} />

      </Routes>
    </Router>
  );
};


export default AppLayout;
