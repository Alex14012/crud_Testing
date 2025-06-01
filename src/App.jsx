import { useState } from 'react'
import './App.css'
import {Routes, Route } from "react-router"
import Home from "./pages/Home"
import Create from "./pages/Create"
import Update from "./pages/Update"


function App() {

  return (
    <>
    <div className="bg-gray-700 w-screen h-screen">
    <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/create" element={<Create/>}></Route>
    <Route path="/Update/:id" element={<Update/>}></Route>
    </Routes>
    </div>
    </>
  )
}

export default App
