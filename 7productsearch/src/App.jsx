

import './App.css'

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import ProductSearchFilter from "./components/ProductSearchFilter";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<h1>Welcome to EasyBuy!</h1>} />
          <Route path="/products" element={<ProductSearchFilter />} />
          <Route path="*" element={<h1>Page Not Found</h1>} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}
