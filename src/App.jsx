import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react'
import './App.css'
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Dashboard from "./Pages/Dashboard";
import CreateEvent from "./Pages/CreateEvent";
import Navbar from './Components/Navbar';
import ProtectedRoute from "./Components/ProtectedRoute";


function App() {

  return (
    <>
    <BrowserRouter>
        <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Register" element={<Register />} />
        <Route path="Login" element={<Login />} />
        <Route path="/staff" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        <Route path="/create" element={<CreateEvent />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
