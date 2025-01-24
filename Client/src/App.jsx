import React from "react"
import { BrowserRouter, Navigate, } from "react-router-dom";
import { Routes, Route, } from "react-router-dom";
import Form from "./components/Form"
import IdCard from "./components/IdCard";

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Form/>} />
          <Route path="/id-card" element={<IdCard/>} />
          {/* <Route path="/id-card" element={location.state ? <IdCard /> : <Navigate to="/" />} /> */}
        </Routes>
    </BrowserRouter>
  )
}

export default App
