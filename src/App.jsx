import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react'
import './App.css'
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";
import CreateEvent from "./Pages/CreateEvent";


function App() {

  return (
    <>
     <Home />
     <Login />
     <Dashboard />
     <CreateEvent />
    </>
  )
}

export default App
