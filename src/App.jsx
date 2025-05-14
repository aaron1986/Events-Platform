import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react'
import './App.css'
import '../src/Pages/Home'
import '../src/Pages/Login'
import '../src/Pages/Dashboard'
import '../src/Pages/CreateEvent'

function App() {

  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/staff" element={<Dashboard />} />
        <Route path="/create" element={<CreateEvent />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
