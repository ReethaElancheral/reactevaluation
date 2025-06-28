

import './App.css'

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import OrderSuccessPage from "./components/OrderSuccessPage";
import HomePage from "./components/HomePage";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main style={{ maxWidth: "900px", margin: "2rem auto", padding: "1rem" }}>
        <Routes>
          <Route path="/" element={<OrderSuccessPage />} />
          <Route path="/home" element={<HomePage />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

