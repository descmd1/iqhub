import "./App.css";
import { Routes, Route, Router } from 'react-router-dom'
import Login from "./Components/login/Login";
import SignUp from "./Components/signup/SignUp";
import Dashboard from "./Components/dashboard/Dashboard";
import ViewModules from "./Components/uploads/ViewModules";
import AssessmentForm from "./Components/assessment/Assessment";
import SubmitAssignment from "./Components/assessment/SubmitAssignment";
import ResetUser from "./Components/uploads/ResetUser";
// import { useContext, useState } from "react";
import AdminSignUp from "./Admin/Components/Signup/AdminSignup";
import AdminLogin from "./Admin/Components/Login/AdminLogin";
import { AuthProvider } from "./utils/Auth";
import LandingPage from "./Components/Landingpage/LandingPage";

function App() {

  return (
    <Routes>
     <Route path="/admin-signup" element={<AdminSignUp />} />
     <Route path="/admin-login" element={<AdminLogin/>} />
     <Route path="/" element={<LandingPage/>}/>
 <Route path="/login" element={<Login />} />
<Route path="/signup" element={<SignUp />} />
<Route path="/dashboard" element={<Dashboard />} />
<Route path="/view-module" element={<ViewModules />} />
<Route path="/assessment" element={<AssessmentForm />} />
<Route path="/submit-assignment" element={<SubmitAssignment />} />
<Route path="/reset-user" element={<ResetUser />} />
    </Routes>
  );
}

export default App;

